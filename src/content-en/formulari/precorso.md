---
titolo: "Precalculus formula sheet"
sommario: "The Precalculus formulas with their conditions of validity: logic, powers and roots, special products and Ruffini's rule, equations and inequalities of every type, logarithms, exponentials, trigonometry, lines and conic sections."
descrizione: "Precalculus formula sheet (free PDF): special products, Ruffini's rule, logarithms, special angle values, trigonometric identities, lines and conic sections."
---

## Logic and quantifiers

The truth tables and the examples are in the chapter [Elementary logic](/en/precorso/logica/teoria).

:::formula{#tavola-connettivi titolo="Truth table of the connectives"}
$$
\begin{array}{c|c|c|c|c|c}
p & q & \lnot p & p \land q & p \lor q & p \Rightarrow q \\
\hline
\text{T} & \text{T} & \text{F} & \text{T} & \text{T} & \text{T} \\
\text{T} & \text{F} & \text{F} & \text{F} & \text{T} & \text{F} \\
\text{F} & \text{T} & \text{T} & \text{F} & \text{T} & \text{T} \\
\text{F} & \text{F} & \text{T} & \text{F} & \text{F} & \text{T}
\end{array}
$$
The disjunction $p \lor q$ is inclusive, that is, it is true also when $p$ and $q$ are both true. The implication is false *only if* the hypothesis is true and the conclusion is false.
:::

:::formula{#doppia-implicazione titolo="Double implication"}
$$
p \Leftrightarrow q \equiv (p \Rightarrow q) \land (q \Rightarrow p)
$$
The double implication is true when $p$ and $q$ have the same truth value. The symbol $\equiv$ indicates that two propositions have the same truth table.
:::

:::formula{#leggi-di-de-morgan titolo="De Morgan's laws"}
$$
\lnot (p \land q) \equiv \lnot p \lor \lnot q, \qquad \lnot (p \lor q) \equiv \lnot p \land \lnot q
$$
Negation exchanges "and" with "or" and negates the individual parts. For example the negation of $x > 0 \land x < 5$ is $x \leq 0 \lor x \geq 5$.
:::

:::formula{#implicazione-e-contronominale titolo="Implication, negation and contrapositive"}
$$
\begin{gathered}
p \Rightarrow q \equiv \lnot p \lor q, \qquad \lnot (p \Rightarrow q) \equiv p \land \lnot q, \\[4pt]
p \Rightarrow q \equiv \lnot q \Rightarrow \lnot p .
\end{gathered}
$$
The contrapositive $\lnot q \Rightarrow \lnot p$ is equivalent to the original implication. The converse $q \Rightarrow p$ has a different truth table, therefore it can be false even when $p \Rightarrow q$ is true.
:::

:::formula{#condizione-necessaria-sufficiente titolo="Necessary and sufficient condition"}
$$
\begin{aligned}
p \Rightarrow q \quad &\iff \quad p \ \text{is sufficient for} \ q \ \text{and} \ q \ \text{is necessary for} \ p \\
p \Leftrightarrow q \quad &\iff \quad p \ \text{is necessary and sufficient for} \ q
\end{aligned}
$$
From the contrapositive it follows that, if the necessary condition $q$ is false, then $p$ is also false. For example "$n$ multiple of $4$" is sufficient for "$n$ even", while "$n$ even" is necessary for "$n$ multiple of $4$".
:::

:::formula{#negazione-quantificatori titolo="Negation of quantifiers"}
$$
\begin{gathered}
\lnot \bigl( \forall x \in A : p(x) \bigr) \equiv \exists x \in A : \lnot p(x), \\[4pt]
\lnot \bigl( \exists x \in A : p(x) \bigr) \equiv \forall x \in A : \lnot p(x) .
\end{gathered}
$$
With several quantifiers all of them are exchanged, from the outermost to the innermost, and finally the predicate is negated. For example the negation of $\forall x \ \exists y : y > x$ is $\exists x \ \forall y : y \leq x$. A single counterexample is enough to make a universal proposition false.
:::

:::formula{#schemi-di-dimostrazione titolo="Proof schemes"}
$$
\begin{aligned}
&\text{direct:} && p \Rightarrow \dots \Rightarrow q \\
&\text{by contrapositive:} && \lnot q \Rightarrow \lnot p \\
&\text{by contradiction:} && p \land \lnot q \Rightarrow \text{contradiction}
\end{aligned}
$$
The three schemes prove the same implication $p \Rightarrow q$. Proof by contradiction is based on the equivalence $\lnot(p \Rightarrow q) \equiv p \land \lnot q$.
:::

## Powers

The definitions and the examples are in the chapter [Powers and roots](/en/precorso/potenze-e-radici/teoria).

:::formula{#esponente-zero-e-negativo titolo="Zero and negative exponents"}
$$
a^0 = 1, \qquad a^{-n} = \frac{1}{a^n}, \qquad \left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^{n}
$$
They hold for $a \neq 0$, $b \neq 0$ and $n$ a natural number. The expression $0^0$ has no meaning. For example $2^{-3} = \dfrac{1}{8}$ and $\left(\dfrac{2}{3}\right)^{-1} = \dfrac{3}{2}$.
:::

:::formula{#segno-di-una-potenza titolo="Power with a negative base"}
$$
(-a)^n =
\begin{cases}
a^n & \text{if } n \text{ is even} \\
-a^n & \text{if } n \text{ is odd}
\end{cases}
$$
It holds for every real $a$ and natural $n$. The expression $-2^4$ denotes the opposite of $2^4$, that is, $-16$, while $(-2)^4 = 16$.
:::

:::formula{#proprieta-delle-potenze titolo="Properties of powers"}
$$
\begin{gathered}
a^m \cdot a^n = a^{m+n}, \qquad \frac{a^m}{a^n} = a^{m-n}, \qquad (a^m)^n = a^{mn}, \\[6pt]
a^n \cdot b^n = (ab)^n, \qquad \frac{a^n}{b^n} = \left(\frac{a}{b}\right)^n .
\end{gathered}
$$
They hold for $a, b > 0$ and real exponents. With negative bases they hold for integer exponents, where the powers are defined.
:::

:::attenzione
The properties concern products and quotients. For a sum, in general, $(a + b)^n \neq a^n + b^n$ and $a^m + a^n \neq a^{m+n}$. For example $(3 + 4)^2 = 49$ and $3^2 + 4^2 = 25$; likewise $2^2 + 2^3 = 12$ and $2^5 = 32$.
:::

:::formula{#potenza-esponente-razionale titolo="Power with a rational exponent"}
$$
a^{\frac{m}{n}} = \sqrt[n]{a^m}, \qquad a^{\frac{1}{n}} = \sqrt[n]{a}, \qquad a^{-\frac{m}{n}} = \frac{1}{\sqrt[n]{a^m}}
$$
They hold for $a > 0$, $m$ an integer and $n$ a natural number with $n \geq 2$. With this definition the properties of powers continue to hold, for example $\sqrt{2} \cdot \sqrt[3]{2} = 2^{\frac{1}{2} + \frac{1}{3}} = 2^{\frac{5}{6}}$.
:::

:::formula{#confronto-tra-potenze titolo="Comparing powers"}
$$
\begin{gathered}
x < y \iff a^x < a^y \qquad (a > 1), \\[4pt]
x < y \iff a^x > a^y \qquad (0 < a < 1), \\[4pt]
0 < a < b \implies a^x < b^x \qquad (x > 0).
\end{gathered}
$$
With exponent $x < 0$ the third inequality is reversed. Powers with different bases and exponents are compared after rewriting them with the same base or with the same exponent, for example $2^{30} = 8^{10} < 9^{10} = 3^{20}$.
:::

## Roots and rationalization

The conditions of existence and the three cases of rationalization are explained in the same chapter [Powers and roots](/en/precorso/potenze-e-radici/teoria).

:::formula{#radice-n-esima titolo="n-th root and conditions of existence"}
$$
\begin{gathered}
\sqrt[n]{a} = x \iff x^n = a \qquad (n \text{ odd},\ a \in \mathbb{R}), \\[6pt]
\sqrt[n]{a} = x \iff
\begin{cases}
x \geq 0 \\
x^n = a
\end{cases}
\qquad (n \text{ even},\ a \geq 0).
\end{gathered}
$$
With an even index the root exists *only if* the radicand is greater than or equal to zero, and its value is greater than or equal to zero. For example $\sqrt{49} = 7$, while the equation $x^2 = 49$ has the solutions $x = \pm 7$; with an odd index $\sqrt[3]{-8} = -2$.
:::

:::formula{#proprieta-delle-radici titolo="Properties of roots"}
$$
\begin{gathered}
\sqrt[n]{ab} = \sqrt[n]{a}\,\sqrt[n]{b}, \qquad \sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}, \\[6pt]
\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}, \qquad \sqrt[n]{a^k} = \left(\sqrt[n]{a}\right)^k .
\end{gathered}
$$
They hold for $a \geq 0$ and $b \geq 0$ ($b > 0$ in the quotient), with indices $m, n \geq 2$ and natural exponent $k \geq 1$. If the indices are odd they hold for all real $a$ and $b$, with $b \neq 0$ in the quotient.
:::

:::formula{#proprieta-invariantiva titolo="Invariance property and comparing roots"}
$$
\sqrt[n]{a^k} = \sqrt[np]{a^{kp}}, \qquad 0 \leq a < b \implies \sqrt[n]{a} < \sqrt[n]{b}
$$
They hold for $a \geq 0$ and $p \geq 1$ a natural number. Roots with different indices are brought to the common index given by the least common multiple of the indices. For example $\sqrt{3} = \sqrt[6]{27}$ and $\sqrt[3]{5} = \sqrt[6]{25}$, therefore $\sqrt{3} > \sqrt[3]{5}$.
:::

:::formula{#radice-di-un-quadrato titolo="Root of a square and moving factors under the root sign"}
$$
\sqrt{a^2} = |a|, \qquad \sqrt{a^2 b} = |a|\sqrt{b}, \qquad a\sqrt{b} = \sqrt{a^2 b} \quad (a \geq 0)
$$
The first holds for every real $a$, the second and the third for $b \geq 0$. For $a < 0$ we have $a\sqrt{b} = -\sqrt{a^2 b}$, for example $-2\sqrt{3} = -\sqrt{12}$. With an even index $n$, $\sqrt[n]{a^n} = |a|$; with an odd index, $\sqrt[n]{a^n} = a$.
:::

:::formula{#radicali-simili titolo="Sum of like radicals"}
$$
a\sqrt[n]{c} + b\sqrt[n]{c} = (a + b)\sqrt[n]{c}
$$
It holds for radicals with the same index and the same radicand, with $c \geq 0$ if $n$ is even. First the factors are taken out of the root sign, for example $\sqrt{12} + \sqrt{27} = 2\sqrt{3} + 3\sqrt{3} = 5\sqrt{3}$.
:::

:::formula{#razionalizzazione titolo="Rationalization"}
$$
\begin{gathered}
\frac{1}{\sqrt{a}} = \frac{\sqrt{a}}{a}, \qquad
\frac{1}{\sqrt[n]{a^k}} = \frac{\sqrt[n]{a^{n-k}}}{a}, \\[6pt]
\frac{1}{\sqrt{a} \pm \sqrt{b}} = \frac{\sqrt{a} \mp \sqrt{b}}{a - b} .
\end{gathered}
$$
They hold for $a > 0$, with $0 < k < n$ in the second and $b \geq 0$, $a \neq b$ in the third. The third multiplies by the conjugate binomial, since $(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b$; with a number in place of a root we have for example $\dfrac{1}{\sqrt{5} - 1} = \dfrac{\sqrt{5} + 1}{4}$.
:::

## Special products

The expansions and their use in factorization are in the chapter [Factorization, Ruffini's rule and polynomial division](/en/precorso/polinomi/teoria).

:::formula{#quadrato-di-binomio titolo="Square of a binomial and of a trinomial"}
$$
\begin{gathered}
(A + B)^2 = A^2 + 2AB + B^2, \qquad (A - B)^2 = A^2 - 2AB + B^2, \\[6pt]
(A + B + C)^2 = A^2 + B^2 + C^2 + 2AB + 2AC + 2BC .
\end{gathered}
$$
They hold for every value of $A$, $B$, $C$. Read from right to left they factor a trinomial made of two squares and twice the product of the bases, for example $x^2 - 10x + 25 = (x - 5)^2$.
:::

:::formula{#cubo-di-binomio titolo="Cube of a binomial"}
$$
\begin{gathered}
(A + B)^3 = A^3 + 3A^2 B + 3AB^2 + B^3, \\[4pt]
(A - B)^3 = A^3 - 3A^2 B + 3AB^2 - B^3 .
\end{gathered}
$$
They hold for every value of $A$ and $B$. For example $(x + 2)^3 = x^3 + 6x^2 + 12x + 8$.
:::

:::formula{#differenza-di-quadrati titolo="Difference of squares"}
$$
A^2 - B^2 = (A - B)(A + B)
$$
It holds for every value of $A$ and $B$ and can be applied several times in a row, for example $x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x - 1)(x + 1)(x^2 + 1)$.
:::

:::formula{#somma-e-differenza-di-cubi titolo="Sum and difference of cubes"}
$$
\begin{gathered}
A^3 + B^3 = (A + B)(A^2 - AB + B^2), \\[4pt]
A^3 - B^3 = (A - B)(A^2 + AB + B^2) .
\end{gathered}
$$
They hold for every value of $A$ and $B$. The second factor, called the false square, as a trinomial in $A$ has discriminant $-3B^2$, which is negative for $B \neq 0$; therefore it has no real roots and the factorization ends.
:::

:::formula{#differenza-di-potenze titolo="Sum and difference of powers"}
$$
\begin{gathered}
A^n - B^n = (A - B)\left(A^{n-1} + A^{n-2}B + \dots + AB^{n-2} + B^{n-1}\right), \\[6pt]
A^n + B^n = (A + B)\left(A^{n-1} - A^{n-2}B + \dots - AB^{n-2} + B^{n-1}\right).
\end{gathered}
$$
The first holds for every natural number $n \geq 2$, the second for $n$ *odd*. For $n = 3$ one recovers the difference and the sum of cubes.
:::

:::formula{#potenza-di-un-binomio titolo="Power of a binomial and Pascal's triangle"}
$$
(A + B)^n = \sum_{k=0}^{n} \binom{n}{k} A^{n-k} B^{k}, \qquad \binom{n}{k} = \frac{n!}{k!\,(n-k)!}
$$
It holds for $n$ a natural number. The coefficients are the rows of Pascal's triangle, for example $(A + B)^4 = A^4 + 4A^3 B + 6A^2 B^2 + 4AB^3 + B^4$. In the expansion of $(A - B)^n$ the signs of the terms alternate.
:::

:::formula{#trinomio-speciale titolo="Special trinomial"}
$$
x^2 + (a + b)\,x + a b = (x + a)(x + b)
$$
It is applied when the two numbers $a$ and $b$ can be found mentally. For example $x^2 - x - 12 = (x + 3)(x - 4)$, since $3 + (-4) = -1$ and $3 \cdot (-4) = -12$.
:::

:::formula{#raccoglimento-totale-e-parziale titolo="Factoring out a common factor and factoring by grouping"}
$$
\begin{gathered}
AB + AC = A\,(B + C), \\[4pt]
AC + AD + BC + BD = A\,(C + D) + B\,(C + D) = (A + B)(C + D) .
\end{gathered}
$$
Factoring by grouping is completed when the groups leave the same factor, for example $x^3 + 2x^2 + 3x + 6 = x^2(x + 2) + 3(x + 2) = (x + 2)(x^2 + 3)$.
:::

:::attenzione
The sum of squares $x^2 + k^2$ with $k \neq 0$ does not factor into first-degree factors with real coefficients. For example $x^2 + 4 \geq 4$ for every $x$, therefore $x^2 + 4$ has no real roots.
:::

## Division, Ruffini's rule and factorization

The theorems with their proofs are in the chapter [Factorization, Ruffini's rule and polynomial division](/en/precorso/polinomi/teoria#divisione-tra-polinomi).

:::formula{#principio-di-identita titolo="Identity principle for polynomials"}
$$
a_n x^n + \dots + a_1 x + a_0 = b_n x^n + \dots + b_1 x + b_0 \ \ \forall x \in \mathbb{R}
\iff a_k = b_k \ \ \forall k
$$
With the principle one determines unknown coefficients, for example from $x^2 + bx + c = x^2 - 4x + 3$ it follows that $b = -4$ and $c = 3$. In the product of two nonzero polynomials the degrees add, that is, $\deg(PQ) = \deg P + \deg Q$.
:::

:::formula{#divisione-con-resto titolo="Division with remainder"}
$$
\begin{cases}
A(x) = B(x)\,Q(x) + R(x) \\[4pt]
R(x) = 0 \ \text{ or } \ \deg R < \deg B
\end{cases}
$$
For every nonzero divisor $B$ the quotient $Q$ and the remainder $R$ exist and are unique. If $\deg A \geq \deg B$, the quotient has degree $\deg A - \deg B$; if $R = 0$, the polynomial $B$ divides $A$.
:::

:::formula{#teorema-del-resto-e-di-ruffini titolo="Remainder theorem and Ruffini's theorem"}
$$
\begin{gathered}
P(x) = (x - c)\,Q(x) + P(c), \\[4pt]
(x - c) \ \text{divides} \ P(x) \iff P(c) = 0 .
\end{gathered}
$$
The remainder of the division by $x - c$ is therefore $P(c)$ and is computed without carrying out the division. For a divisor $ax - b$ with $a \neq 0$ the remainder is $P\left(\dfrac{b}{a}\right)$.
:::

:::formula{#schema-di-ruffini titolo="Ruffini's scheme"}
$$
\begin{array}{c|ccc|c}
 & 1 & -2 & -5 & 6 \\
1 &  & 1 & -1 & -6 \\ \hline
 & 1 & -1 & -6 & 0
\end{array}
$$
In the first row the coefficients are written in decreasing order of degree, with $0$ in place of the missing degrees; each number in the result row is multiplied by $c$ and added to the coefficient in the next column. The last number is the remainder $P(c)$, the others are the coefficients of the quotient, of degree $\deg P - 1$. Here $x^3 - 2x^2 - 5x + 6 = (x - 1)(x^2 - x - 6)$.
:::

:::formula{#radici-razionali titolo="Rational roots of a polynomial"}
$$
P\left(\frac{p}{q}\right) = 0 \implies p \mid a_0 \ \text{ and } \ q \mid a_n
$$
It holds for $P(x) = a_n x^n + \dots + a_0$ with integer coefficients and $a_0 \neq 0$, and for $\dfrac{p}{q}$ in lowest terms. The rational roots are therefore sought among a finite number of candidates; if $a_n = 1$, they are integers that divide the constant term.
:::

:::formula{#scomposizione-del-trinomio titolo="Factorization of the quadratic trinomial"}
$$
ax^2 + bx + c = a\,(x - x_1)(x - x_2)
$$
It holds for $a \neq 0$ and $\Delta = b^2 - 4ac \geq 0$, with $x_1$ and $x_2$ the roots of the trinomial; if $\Delta = 0$ we have $ax^2 + bx + c = a\,(x - x_1)^2$. If $\Delta < 0$ the trinomial does not factor into real first-degree factors.
:::

:::formula{#molteplicita-di-una-radice titolo="Multiplicity of a root"}
$$
P(x) = (x - c)^m\,Q(x), \qquad Q(c) \neq 0
$$
In this case the root $c$ has multiplicity $m \geq 1$. The graph of $P$ crosses the $x$-axis at $c$ if $m$ is odd and touches it without crossing if $m$ is even.
:::

## Linear and quadratic equations

The proof of the quadratic formula is in the chapter [Polynomial and rational equations and inequalities](/en/precorso/equazioni-polinomiali/teoria).

:::formula{#equazione-di-primo-grado titolo="Linear equation"}
$$
ax + b = 0 \iff x = -\frac{b}{a}
$$
It holds for $a \neq 0$. For $a = 0$ the equation has no solutions if $b \neq 0$ and is an identity if $b = 0$.
:::

:::formula{#formula-risolutiva titolo="Quadratic formula"}
$$
ax^2 + bx + c = 0 \iff x = \frac{-b \pm \sqrt{\Delta}}{2a}, \qquad \Delta = b^2 - 4ac
$$
It holds for $a \neq 0$ and $\Delta \geq 0$. For $\Delta > 0$ the solutions are two and distinct, for $\Delta = 0$ there is only the double solution $x = -\dfrac{b}{2a}$, for $\Delta < 0$ the equation **has no real solutions**.
:::

:::formula{#formula-ridotta titolo="Reduced quadratic formula"}
$$
x = \frac{-\frac{b}{2} \pm \sqrt{\frac{\Delta}{4}}}{a}, \qquad \frac{\Delta}{4} = \left(\frac{b}{2}\right)^2 - ac
$$
It holds for $a \neq 0$ and $\dfrac{\Delta}{4} \geq 0$. It is the quadratic formula with numerator and denominator divided by $2$, and it shortens the computations when $b$ is even. For example $x^2 - 6x + 4 = 0$ has $\dfrac{\Delta}{4} = 9 - 4 = 5$, therefore $x = 3 \pm \sqrt{5}$.
:::

:::formula{#equazioni-incomplete titolo="Incomplete quadratic equations"}
$$
\begin{gathered}
ax^2 + bx = 0 \iff x = 0 \ \vee \ x = -\frac{b}{a}, \\[6pt]
ax^2 + c = 0 \iff x = \pm\sqrt{-\frac{c}{a}} .
\end{gathered}
$$
They hold for $a \neq 0$. The second has real solutions *only if* $-\dfrac{c}{a} \geq 0$; for $-\dfrac{c}{a} < 0$ it has no solutions.
:::

:::formula{#somma-e-prodotto-delle-radici titolo="Sum and product of the roots"}
$$
x_1 + x_2 = -\frac{b}{a}, \qquad x_1 \cdot x_2 = \frac{c}{a}
$$
They hold for $a \neq 0$ and $\Delta \geq 0$, with $x_1$ and $x_2$ the roots of $ax^2 + bx + c = 0$. Consequently the two numbers with sum $s$ and product $p$ are the solutions of $x^2 - sx + p = 0$.
:::

:::formula{#legge-di-annullamento-del-prodotto titolo="Zero product property"}
$$
A \cdot B = 0 \iff A = 0 \ \vee \ B = 0
$$
An equation $P(x) = 0$ of degree greater than two is solved by factoring $P$ and setting each factor equal to zero. A polynomial of degree $n$ has at most $n$ real roots.
:::

:::formula{#equazioni-biquadratiche titolo="Biquadratic and trinomial equations"}
$$
ax^4 + bx^2 + c = 0 \quad \xrightarrow{\ t \, = \, x^2\ } \quad at^2 + bt + c = 0
$$
Every solution $t > 0$ gives $x = \pm\sqrt{t}$, the solution $t = 0$ gives $x = 0$, the solutions $t < 0$ are discarded. Likewise the equation $ax^{2n} + bx^n + c = 0$ is solved with the substitution $t = x^n$.
:::

## Polynomial and rational inequalities

The examples with the sign table are in the chapter [Polynomial and rational equations and inequalities](/en/precorso/equazioni-polinomiali/teoria#tabella-dei-segni).

:::formula{#principi-di-equivalenza titolo="Equivalence principles for inequalities"}
$$
\begin{gathered}
A < B \iff A + C < B + C, \\[4pt]
A < B \iff AC < BC \quad (C > 0), \qquad A < B \iff AC > BC \quad (C < 0).
\end{gathered}
$$
Multiplying both sides by a negative quantity reverses the direction of the inequality. For example from $-2x > -4$ it follows that $x < 2$.
:::

:::formula{#segno-del-trinomio titolo="Sign of the quadratic trinomial"}
$$
\begin{aligned}
\Delta > 0 &\implies ax^2 + bx + c > 0 \ \text{ for } x < x_1 \vee x > x_2 \\
\Delta = 0 &\implies ax^2 + bx + c > 0 \ \text{ for } x \neq x_0 \\
\Delta < 0 &\implies ax^2 + bx + c > 0 \ \text{ for every } x
\end{aligned}
$$
They hold for $a > 0$, with $x_1 < x_2$ the roots of the trinomial and $x_0$ the double root; for $x_1 < x < x_2$ the trinomial is negative. For $a < 0$ the signs are the opposite, and alternatively one multiplies by $-1$ reversing the direction of the inequality.
:::

:::formula{#segno-prodotto-quoziente titolo="Sign of a product and of a quotient"}
$$
\operatorname{sign}\left(\frac{N(x)}{D(x)}\right) = \operatorname{sign}\bigl(N(x)\,D(x)\bigr) \qquad (D(x) \neq 0)
$$
A product is positive where the number of negative factors is even and negative where it is odd; in the sign table each factor occupies one row. A factor $(x - c)^m$ with $m$ even is positive for $x \neq c$, with $m$ odd it has the sign of $x - c$.
:::

:::formula{#equazioni-fratte titolo="Rational equations"}
$$
\frac{N(x)}{D(x)} = 0 \iff
\begin{cases}
N(x) = 0 \\
D(x) \neq 0
\end{cases}
$$
The conditions of existence $D(x) \neq 0$ are written for all the denominators of the original equation, before reducing to a common denominator. The solutions of $N(x) = 0$ that make a denominator vanish are discarded.
:::

:::formula{#disequazioni-fratte titolo="Rational inequalities"}
$$
\begin{gathered}
\frac{N(x)}{D(x)} > 0 \iff N(x)\,D(x) > 0, \\[6pt]
\frac{N(x)}{D(x)} \geq 0 \iff
\begin{cases}
N(x)\,D(x) \geq 0 \\
D(x) \neq 0
\end{cases}
\end{gathered}
$$
The zeros of the denominator are excluded for every direction of the inequality; with $\geq$ and $\leq$ the zeros of the numerator are included.
:::

:::attenzione
Multiplying both sides by a denominator presupposes its sign, which depends on $x$. From $\dfrac{1}{x} < 1$ it does not follow that $1 < x$, since $x = -1$ satisfies the first inequality and not the second. The solutions of $\dfrac{1}{x} < 1$ are $x < 0 \ \vee \ x > 1$.
:::

:::formula{#sistemi-di-disequazioni titolo="Systems of inequalities"}
$$
\begin{cases}
A(x) > 0 \\
B(x) > 0
\end{cases}
\iff x \in S_A \cap S_B
$$
Here $S_A$ and $S_B$ are the solution sets of the individual inequalities. The solutions of the system are therefore the intervals common to all the inequalities.
:::

## Absolute value

Every solving form descends from the definition by cases, as shown in the chapter [Equations and inequalities with absolute value](/en/precorso/valore-assoluto/teoria).

:::formula{#definizione-valore-assoluto titolo="Absolute value and distance"}
$$
|x| =
\begin{cases}
x & \text{if } x \geq 0 \\
-x & \text{if } x < 0
\end{cases}
$$
The absolute value is always greater than or equal to zero and equals zero *only if* $x = 0$. The number $|x - c|$ is the distance between $x$ and $c$ on the real line; for an expression $A$ we have $|A| = A$ where $A \geq 0$ and $|A| = -A$ where $A < 0$.
:::

:::formula{#proprieta-del-valore-assoluto titolo="Properties of the absolute value"}
$$
\begin{gathered}
|ab| = |a|\,|b|, \qquad \left|\frac{a}{b}\right| = \frac{|a|}{|b|}, \qquad |-a| = |a|, \\[6pt]
|a|^2 = a^2, \qquad \sqrt{a^2} = |a|, \qquad |a + b| \leq |a| + |b| .
\end{gathered}
$$
They hold for all real $a, b$, with $b \neq 0$ in the quotient. The last one is the **triangle inequality**, and equality holds if and only if $ab \geq 0$.
:::

:::formula{#equazione-modulo-uguale-k titolo="Equation |A| = k"}
$$
|A| = k \iff A = k \ \vee \ A = -k \qquad (k > 0)
$$
For $k = 0$ the equation is equivalent to $A = 0$. For $k < 0$ it has no solutions, because $|A| \geq 0$.
:::

:::formula{#equazione-due-moduli titolo="Equation |A| = |B|"}
$$
|A| = |B| \iff A = B \ \vee \ A = -B
$$
The formula holds without additional conditions, because both sides are greater than or equal to zero.
:::

:::formula{#equazione-modulo-uguale-espressione titolo="Equation |A| = B"}
$$
|A| = B \iff
\begin{cases}
B \geq 0 \\
A = B
\end{cases}
\ \cup \
\begin{cases}
B \geq 0 \\
A = -B
\end{cases}
$$
The left-hand side is not negative, therefore the equation imposes the condition $B \geq 0$. The solutions that do not satisfy it are discarded.
:::

:::formula{#disequazione-modulo-minore titolo="Inequalities |A| < k and |A| ≤ k"}
$$
|A| < k \iff -k < A < k, \qquad |A| \leq k \iff -k \leq A \leq k
$$
They hold for $k > 0$. For $k \leq 0$ the inequality $|A| < k$ has no solutions; the inequality $|A| \leq 0$ is equivalent to $A = 0$.
:::

:::formula{#disequazione-modulo-maggiore titolo="Inequalities |A| > k and |A| ≥ k"}
$$
|A| > k \iff A < -k \ \vee \ A > k, \qquad |A| \geq k \iff A \leq -k \ \vee \ A \geq k
$$
They hold for $k > 0$. For $k = 0$ we have $|A| > 0 \iff A \neq 0$. For $k < 0$ the inequality $|A| > k$ is satisfied on the whole domain of $A$, and the same holds for $|A| \geq k$ with $k \leq 0$.
:::

:::formula{#disequazione-modulo-espressione titolo="Inequalities |A| < B and |A| > B"}
$$
|A| < B \iff
\begin{cases}
A < B \\
A > -B
\end{cases}
\qquad
|A| > B \iff A > B \ \vee \ A < -B
$$
The two forms hold whatever the sign of $B$, because the system on the left by itself implies $B > 0$ and the union on the right includes the points with $B < 0$. With $\leq$ and $\geq$ the forms are the same, with non-strict inequalities.
:::

:::formula{#disequazione-tra-moduli titolo="Inequality |A| < |B|"}
$$
|A| < |B| \iff A^2 < B^2 \iff (A - B)(A + B) < 0
$$
It holds because both sides are greater than or equal to zero, therefore the comparison between the absolute values is equivalent to the comparison between the squares.
:::

:::formula{#studio-per-zone titolo="Several absolute values: case analysis by intervals"}
$$
\begin{cases}
x < 0 \\
-2x + 2 = 4
\end{cases}
\ \cup \
\begin{cases}
0 \leq x < 2 \\
2 = 4
\end{cases}
\ \cup \
\begin{cases}
x \geq 2 \\
2x - 2 = 4
\end{cases}
$$
The arguments of $|x| + |x - 2| = 4$ vanish at $0$ and at $2$, which divide the line into three intervals; in each interval every absolute value is written without bars according to the sign of its argument. The solutions are the union of the results of the intervals, here $x = -1$ and $x = 3$.
:::

## Radical equations and inequalities

The reason for each condition is explained in the chapter [Radical equations and inequalities](/en/precorso/irrazionali/teoria).

:::formula{#equazione-radice-uguale-espressione titolo="Equation √A = B"}
$$
\sqrt{A} = B \iff
\begin{cases}
B \geq 0 \\
A = B^2
\end{cases}
$$
The condition of existence $A \geq 0$ follows from $A = B^2$. Without the condition $B \geq 0$ squaring introduces extraneous solutions: from $\sqrt{x} = x - 2$ one obtains $x^2 - 5x + 4 = 0$, but the root $x = 1$ gives $x - 2 = -1 < 0$, therefore the only solution is $x = 4$.
:::

:::formula{#equazione-due-radici titolo="Equation √A = √B"}
$$
\sqrt{A} = \sqrt{B} \iff
\begin{cases}
A \geq 0 \\
A = B
\end{cases}
$$
The condition $B \geq 0$ follows from $A = B$ and $A \geq 0$. In place of $A \geq 0$ one may impose $B \geq 0$, choosing the simpler radicand.
:::

:::formula{#disequazione-radice-minore titolo="Inequalities √A < B and √A ≤ B"}
$$
\sqrt{A} < B \iff
\begin{cases}
A \geq 0 \\
B > 0 \\
A < B^2
\end{cases}
\qquad
\sqrt{A} \leq B \iff
\begin{cases}
A \geq 0 \\
B \geq 0 \\
A \leq B^2
\end{cases}
$$
The first condition is the existence of the root and the second follows from $\sqrt{A} \geq 0$. With both sides greater than or equal to zero, squaring preserves the direction of the inequality.
:::

:::formula{#disequazione-radice-maggiore titolo="Inequalities √A > B and √A ≥ B"}
$$
\sqrt{A} > B \iff
\begin{cases}
B < 0 \\
A \geq 0
\end{cases}
\ \cup \
\begin{cases}
B \geq 0 \\
A > B^2
\end{cases}
$$
Where $B < 0$ it is enough that the root exists; in the second system the condition $A \geq 0$ follows from $A > B^2$. For $\sqrt{A} \geq B$ the second system becomes $B \geq 0$, $A \geq B^2$.
:::

:::formula{#disequazione-tra-radici titolo="Inequality √A < √B"}
$$
\sqrt{A} < \sqrt{B} \iff
\begin{cases}
A \geq 0 \\
A < B
\end{cases}
$$
The condition of existence $B \geq 0$ follows from $0 \leq A < B$.
:::

:::formula{#radici-di-indice-dispari titolo="Roots with odd index"}
$$
\begin{gathered}
\sqrt[3]{A} = B \iff A = B^3, \\[4pt]
\sqrt[3]{A} < B \iff A < B^3, \qquad \sqrt[3]{A} > B \iff A > B^3 .
\end{gathered}
$$
They hold without conditions of existence and without cases on the sign of the sides, because $y = x^3$ is strictly increasing on all of $\mathbb{R}$. The same holds for every odd index $n$, with $B^n$ in place of $B^3$.
:::

## Logarithms

The properties and the solving methods are explained in the chapter [Logarithmic equations and inequalities](/en/precorso/logaritmiche/teoria).

:::formula{#definizione-di-logaritmo titolo="Definition of logarithm"}
$$
\log_a b = c \iff a^c = b
$$
It holds for $a > 0$, $a \neq 1$ and $b > 0$. The logarithm exists *only* for positive arguments, because $a^c > 0$ for every $c$. The logarithm to base $e$ is denoted by $\ln$.
:::

:::formula{#identita-dei-logaritmi titolo="Identities and special values"}
$$
\log_a 1 = 0, \qquad \log_a a = 1, \qquad \log_a (a^x) = x, \qquad a^{\log_a x} = x
$$
They hold for $a > 0$, $a \neq 1$; the third for every real $x$, the fourth for $x > 0$. With the third a number is written as a logarithm, for example $2 = \log_3 9$.
:::

:::formula{#proprieta-dei-logaritmi titolo="Properties of logarithms"}
$$
\begin{gathered}
\log_a (xy) = \log_a x + \log_a y, \qquad \log_a \frac{x}{y} = \log_a x - \log_a y, \\[6pt]
\log_a (x^p) = p \log_a x .
\end{gathered}
$$
They hold for $a > 0$, $a \neq 1$, $x > 0$, $y > 0$ and $p$ real. With the unknown in the arguments, the conditions of existence are written before applying them.
:::

:::formula{#logaritmo-di-una-potenza-pari titolo="Logarithm of an even power"}
$$
\log_a (x^2) = 2 \log_a |x|
$$
It holds for $x \neq 0$. The equality $\log_a (x^2) = 2 \log_a x$ holds *only* for $x > 0$, therefore, applied to an equation, it can restrict its domain.
:::

:::formula{#cambio-di-base titolo="Change of base"}
$$
\log_a x = \frac{\log_b x}{\log_b a}, \qquad \log_a b = \frac{1}{\log_b a}, \qquad \log_{a^k} x = \frac{1}{k} \log_a x
$$
They hold for $a, b > 0$ different from $1$, $x > 0$ and $k \neq 0$; for $k = -1$ one obtains $\log_{\frac{1}{a}} x = -\log_a x$. For example $\log_4 8 = \dfrac{\log_2 8}{\log_2 4} = \dfrac{3}{2}$.
:::

:::formula{#funzione-logaritmica titolo="Logarithmic function"}
$$
y = \log_a x, \qquad x > 0
$$
For $a > 1$ it is strictly increasing, for $0 < a < 1$ it is strictly decreasing; the graph passes through $(1, 0)$ and has the line $x = 0$ as a vertical asymptote. For $a > 1$ the logarithm is negative for $0 < x < 1$ and positive for $x > 1$.
:::

:::attenzione
The properties of logarithms concern products, quotients and powers. In general $\log_a (x + y) \neq \log_a x + \log_a y$ and $(\log_a x)^2 \neq \log_a (x^2)$. For example $\log_2 (4 + 4) = 3$ and $\log_2 4 + \log_2 4 = 4$; moreover $(\log_2 8)^2 = 9$ and $\log_2 64 = 6$.
:::

:::formula{#equazione-logaritmi-stessa-base titolo="Equation logₐ A = logₐ B"}
$$
\log_a A = \log_a B \iff
\begin{cases}
A = B \\
A > 0
\end{cases}
$$
It holds for $a > 0$, $a \neq 1$, because the logarithmic function is injective. The condition $B > 0$ follows from $A = B$ and $A > 0$. If the equation is obtained with the properties from several logarithms, the conditions of existence are written for all the logarithms of the original equation.
:::

:::formula{#logaritmo-uguale-a-un-numero titolo="Equation logₐ A = k"}
$$
\log_a A = k \iff A = a^k
$$
It holds for $a > 0$, $a \neq 1$ and $k$ real. The condition $A > 0$ is satisfied, because $a^k > 0$.
:::

:::formula{#sostituzione-logaritmica titolo="Substitution method"}
$$
t = \log_a x \iff x = a^t
$$
It holds for $a > 0$, $a \neq 1$ and $x > 0$. The substitution transforms an equation in $\log_a x$ and $(\log_a x)^2$ into an algebraic equation in $t$; every real value of $t$ is acceptable and gives the solution $x = a^t$.
:::

:::formula{#disequazioni-logaritmiche titolo="Inequality logₐ A > logₐ B"}
$$
\begin{gathered}
\log_a A > \log_a B \iff
\begin{cases}
A > B \\
B > 0
\end{cases}
\quad (a > 1), \\[8pt]
\log_a A > \log_a B \iff
\begin{cases}
A < B \\
A > 0
\end{cases}
\quad (0 < a < 1).
\end{gathered}
$$
With a base greater than $1$ the direction of the inequality is preserved, with a base between $0$ and $1$ it is reversed. In each system the condition of existence concerns the smaller argument, because the positivity of the other follows from the inequality; with $\geq$, $<$, $\leq$ the rule is the same.
:::

:::formula{#disequazione-logaritmo-numero titolo="Inequality logₐ A > k"}
$$
\begin{gathered}
\log_a A > k \iff A > a^k \quad (a > 1), \\[6pt]
\log_a A > k \iff
\begin{cases}
A < a^k \\
A > 0
\end{cases}
\quad (0 < a < 1).
\end{gathered}
$$
For $\log_a A < k$ the two cases are exchanged, therefore the inequality is equivalent to $0 < A < a^k$ if $a > 1$ and to $A > a^k$ if $0 < a < 1$.
:::

## Exponential equations and inequalities

The examples with the two bases and with the substitution are in the chapter [Exponential equations and inequalities](/en/precorso/esponenziali/teoria).

:::formula{#funzione-esponenziale titolo="Exponential function"}
$$
y = a^x, \qquad a^x > 0 \ \text{ for every } x \in \mathbb{R}
$$
It holds for $a > 0$, $a \neq 1$. The graph passes through $(0, 1)$ and has the horizontal asymptote $y = 0$; the function is strictly increasing for $a > 1$ and strictly decreasing for $0 < a < 1$. Moreover $\left(\dfrac{1}{a}\right)^x = a^{-x}$ holds.
:::

:::formula{#equazione-stessa-base titolo="Equation with the same base"}
$$
a^A = a^B \iff A = B
$$
It holds for $a > 0$, $a \neq 1$, because the exponential function is injective. Both sides are rewritten as powers of the same base, for example $8^x = 2^{3x}$ and $\dfrac{1}{9} = 3^{-2}$.
:::

:::formula{#esponenziale-uguale-a-un-numero titolo="Equation with a constant right-hand side"}
$$
a^A = k \iff A = \log_a k
$$
It holds for $a > 0$, $a \neq 1$ and $k > 0$. For $k \leq 0$ the equation has no solutions, because $a^A > 0$.
:::

:::formula{#equazione-basi-diverse titolo="Equation with different bases"}
$$
a^A = b^B \iff A \log_c a = B \log_c b
$$
It holds for $a, b > 0$ and for every base $c > 0$ with $c \neq 1$; it is obtained by applying $\log_c$ to both sides, which are positive. For example $2^x = 3^{x-1}$ is equivalent to $x \ln 2 = (x - 1) \ln 3$, therefore $x = \dfrac{\ln 3}{\ln 3 - \ln 2}$.
:::

:::formula{#sostituzione-esponenziale titolo="Substitution method"}
$$
t = a^x, \ t > 0 \qquad \Longrightarrow \qquad a^{2x} = t^2, \qquad a^{x+k} = a^k\, t, \qquad a^{-x} = \frac{1}{t}
$$
It holds for $a > 0$, $a \neq 1$. The solutions in $t$ with $t \leq 0$ are discarded, and from every $t > 0$ one obtains $x = \log_a t$. In inequalities the solution set in $t$ is intersected with $t > 0$ before returning to the variable $x$.
:::

:::formula{#disequazioni-esponenziali titolo="Inequalities with the same base"}
$$
\begin{gathered}
a^A > a^B \iff A > B \quad (a > 1), \\[4pt]
a^A > a^B \iff A < B \quad (0 < a < 1).
\end{gathered}
$$
With a base greater than $1$ the direction of the inequality is preserved, with a base between $0$ and $1$ it is reversed; the same holds with $\geq$, $<$, $\leq$. For $k > 0$ one writes $k = a^{\log_a k}$, therefore for example, if $a > 1$, the inequality $a^A > k$ is equivalent to $A > \log_a k$.
:::

:::formula{#esponenziale-secondo-membro-negativo titolo="Inequalities with a negative or zero right-hand side"}
$$
a^A > k \ \text{ on the whole domain of } A, \qquad a^A < k \ \text{ never}
$$
They hold for $a > 0$ and $k \leq 0$, because $a^A > 0$. Likewise $a^A \geq k$ is always satisfied and $a^A \leq k$ has no solutions.
:::

## Special values and related angles

The unit circle and its symmetries are described in the chapter [Trigonometric equations and inequalities](/en/precorso/goniometriche/teoria).

:::formula{#gradi-e-radianti titolo="Degrees and radians"}
$$
\frac{x}{\pi} = \frac{\alpha}{180^\circ}
$$
Here $x$ is the measure in radians and $\alpha$ the measure in degrees of the same angle. For example $30^\circ$, $45^\circ$, $60^\circ$, $90^\circ$ correspond to $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$, $\dfrac{\pi}{3}$, $\dfrac{\pi}{2}$.
:::

:::formula{#seno-coseno-tangente titolo="Sine, cosine and tangent"}
$$
\cos x = x_P, \qquad \sin x = y_P, \qquad \tan x = \frac{\sin x}{\cos x}
$$
$P$ is the point of the unit circle determined by the angle $x$, therefore $-1 \leq \sin x \leq 1$ and $-1 \leq \cos x \leq 1$. The tangent is defined for $x \neq \dfrac{\pi}{2} + n\pi$, the cotangent $\cot x = \dfrac{\cos x}{\sin x}$ for $x \neq n\pi$, with $n \in \mathbb{Z}$.
:::

:::formula{#periodicita titolo="Periodicity"}
$$
\sin(x + 2n\pi) = \sin x, \qquad \cos(x + 2n\pi) = \cos x, \qquad \tan(x + n\pi) = \tan x
$$
They hold for every $n \in \mathbb{Z}$, the third where the tangent is defined. Sine and cosine have period $2\pi$, the tangent has period $\pi$; for $k \neq 0$ the functions $\sin(kx)$ and $\cos(kx)$ have period $\dfrac{2\pi}{|k|}$.
:::

:::formula{#valori-notevoli titolo="Special values of sine and cosine"}
| $x$ | $\sin x$ | $\cos x$ |
|---|---|---|
| $0$ | $0$ | $1$ |
| $\dfrac{\pi}{6}$ ($30^\circ$) | $\dfrac{1}{2}$ | $\dfrac{\sqrt{3}}{2}$ |
| $\dfrac{\pi}{4}$ ($45^\circ$) | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{2}}{2}$ |
| $\dfrac{\pi}{3}$ ($60^\circ$) | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{1}{2}$ |
| $\dfrac{\pi}{2}$ ($90^\circ$) | $1$ | $0$ |
| $\dfrac{2\pi}{3}$ ($120^\circ$) | $\dfrac{\sqrt{3}}{2}$ | $-\dfrac{1}{2}$ |
| $\dfrac{3\pi}{4}$ ($135^\circ$) | $\dfrac{\sqrt{2}}{2}$ | $-\dfrac{\sqrt{2}}{2}$ |
| $\dfrac{5\pi}{6}$ ($150^\circ$) | $\dfrac{1}{2}$ | $-\dfrac{\sqrt{3}}{2}$ |
| $\pi$ ($180^\circ$) | $0$ | $-1$ |
| $\dfrac{3\pi}{2}$ ($270^\circ$) | $-1$ | $0$ |

The angles of the third and fourth quadrants are reduced to these with the related angles, for example $\sin\dfrac{7\pi}{6} = -\sin\dfrac{\pi}{6} = -\dfrac{1}{2}$.
:::

:::formula{#valori-notevoli-tangente titolo="Special values of the tangent"}
| $x$ | $\tan x$ |
|---|---|
| $0$ | $0$ |
| $\dfrac{\pi}{6}$ | $\dfrac{\sqrt{3}}{3}$ |
| $\dfrac{\pi}{4}$ | $1$ |
| $\dfrac{\pi}{3}$ | $\sqrt{3}$ |
| $\dfrac{\pi}{2}$ | undefined |

In the other quadrants the values are obtained from the period $\pi$ and from $\tan(-x) = -\tan x$, for example $\tan\dfrac{3\pi}{4} = \tan\left(-\dfrac{\pi}{4}\right) = -1$.
:::

:::formula{#identita-fondamentale titolo="Fundamental identity and relations between the functions"}
$$
\begin{gathered}
\sin^2 x + \cos^2 x = 1, \qquad 1 + \tan^2 x = \frac{1}{\cos^2 x}, \\[6pt]
\cos^2 x = \frac{1}{1 + \tan^2 x}, \qquad \sin^2 x = \frac{\tan^2 x}{1 + \tan^2 x} .
\end{gathered}
$$
The first holds for every real $x$, the others for $\cos x \neq 0$. Given $\sin x$, we have $\cos x = \pm\sqrt{1 - \sin^2 x}$, with the sign determined by the quadrant of the angle.
:::

:::formula{#angoli-associati titolo="Opposite, supplementary and explementary angles, and angles differing by π"}
$$
\begin{aligned}
\sin(-x) &= -\sin x, & \cos(-x) &= \cos x \\
\sin(\pi - x) &= \sin x, & \cos(\pi - x) &= -\cos x \\
\sin(\pi + x) &= -\sin x, & \cos(\pi + x) &= -\cos x \\
\sin(2\pi - x) &= -\sin x, & \cos(2\pi - x) &= \cos x
\end{aligned}
$$
They hold for every real $x$; therefore sine and tangent are odd functions and cosine is even. For the tangent, where it is defined, $\tan(-x) = \tan(\pi - x) = \tan(2\pi - x) = -\tan x$ and $\tan(\pi + x) = \tan x$.
:::

:::formula{#angoli-complementari titolo="Complementary angles and angles differing by π/2"}
$$
\begin{aligned}
\sin\left(\frac{\pi}{2} - x\right) &= \cos x, & \cos\left(\frac{\pi}{2} - x\right) &= \sin x \\[4pt]
\sin\left(\frac{\pi}{2} + x\right) &= \cos x, & \cos\left(\frac{\pi}{2} + x\right) &= -\sin x \\[4pt]
\sin\left(\frac{3\pi}{2} - x\right) &= -\cos x, & \cos\left(\frac{3\pi}{2} - x\right) &= -\sin x \\[4pt]
\sin\left(\frac{3\pi}{2} + x\right) &= -\cos x, & \cos\left(\frac{3\pi}{2} + x\right) &= \sin x
\end{aligned}
$$
They hold for every real $x$. Where both sides are defined, $\tan\left(\dfrac{\pi}{2} - x\right) = \dfrac{1}{\tan x}$ and $\tan\left(\dfrac{\pi}{2} + x\right) = -\dfrac{1}{\tan x}$.
:::

## Trigonometric identities

The addition and double-angle formulas are stated in the chapter [Trigonometric equations and inequalities](/en/precorso/goniometriche/teoria#formule-di-addizione); the others are derived from these.

:::formula{#formule-di-addizione titolo="Addition and subtraction formulas"}
$$
\begin{gathered}
\sin(a \pm b) = \sin a \cos b \pm \cos a \sin b, \\[4pt]
\cos(a \pm b) = \cos a \cos b \mp \sin a \sin b, \\[4pt]
\tan(a \pm b) = \frac{\tan a \pm \tan b}{1 \mp \tan a \tan b} .
\end{gathered}
$$
The first two hold for all real $a, b$, the third where $\tan a$, $\tan b$ and $\tan(a \pm b)$ are defined. For example $\cos\dfrac{\pi}{12} = \cos\left(\dfrac{\pi}{3} - \dfrac{\pi}{4}\right) = \dfrac{\sqrt{2} + \sqrt{6}}{4}$.
:::

:::formula{#formule-di-duplicazione titolo="Double-angle formulas"}
$$
\begin{gathered}
\sin 2x = 2 \sin x \cos x, \\[4pt]
\cos 2x = \cos^2 x - \sin^2 x = 1 - 2\sin^2 x = 2\cos^2 x - 1, \\[4pt]
\tan 2x = \frac{2 \tan x}{1 - \tan^2 x} .
\end{gathered}
$$
The first two hold for every real $x$, the third where $\tan x$ and $\tan 2x$ are defined. With the suitable form of $\cos 2x$ an equation containing $\cos 2x$ and $\sin x$, or $\cos 2x$ and $\cos x$, becomes a quadratic equation in a single function.
:::

:::formula{#formule-di-triplicazione titolo="Triple-angle formulas"}
$$
\sin 3x = 3 \sin x - 4 \sin^3 x, \qquad \cos 3x = 4 \cos^3 x - 3 \cos x
$$
They hold for every real $x$ and are obtained by writing $3x = 2x + x$ and applying the addition and double-angle formulas.
:::

:::formula{#abbassamento-di-grado titolo="Power-reduction formulas"}
$$
\sin^2 x = \frac{1 - \cos 2x}{2}, \qquad \cos^2 x = \frac{1 + \cos 2x}{2}, \qquad \sin x \cos x = \frac{\sin 2x}{2}
$$
They hold for every real $x$ and follow from the double-angle formulas. They transform a second-degree expression in sine and cosine into a first-degree expression in $\sin 2x$ and $\cos 2x$.
:::

:::formula{#formule-di-bisezione titolo="Half-angle formulas"}
$$
\begin{gathered}
\sin\frac{x}{2} = \pm\sqrt{\frac{1 - \cos x}{2}}, \qquad \cos\frac{x}{2} = \pm\sqrt{\frac{1 + \cos x}{2}}, \\[6pt]
\tan\frac{x}{2} = \frac{\sin x}{1 + \cos x} = \frac{1 - \cos x}{\sin x} .
\end{gathered}
$$
In the first two the sign is that of the function in the quadrant where $\dfrac{x}{2}$ lies. The two expressions of $\tan\dfrac{x}{2}$ hold respectively for $\cos x \neq -1$ and for $\sin x \neq 0$.
:::

:::formula{#formule-parametriche titolo="Parametric formulas"}
$$
\begin{gathered}
\sin x = \frac{2t}{1 + t^2}, \qquad \cos x = \frac{1 - t^2}{1 + t^2}, \qquad \tan x = \frac{2t}{1 - t^2}, \\[6pt]
t = \tan\frac{x}{2} .
\end{gathered}
$$
They hold for $x \neq \pi + 2n\pi$, where $\tan\dfrac{x}{2}$ is defined, and the third also requires $t \neq \pm 1$. With this substitution the equation $a \sin x + b \cos x = c$ becomes a quadratic equation in $t$; the angles $x = \pi + 2n\pi$ are checked separately in the original equation.
:::

:::formula{#formule-di-prostaferesi titolo="Sum-to-product formulas"}
$$
\begin{aligned}
\sin p + \sin q &= 2 \sin\frac{p + q}{2} \cos\frac{p - q}{2} \\[4pt]
\sin p - \sin q &= 2 \cos\frac{p + q}{2} \sin\frac{p - q}{2} \\[4pt]
\cos p + \cos q &= 2 \cos\frac{p + q}{2} \cos\frac{p - q}{2} \\[4pt]
\cos p - \cos q &= -2 \sin\frac{p + q}{2} \sin\frac{p - q}{2}
\end{aligned}
$$
They hold for all real $p, q$. They transform a sum into a product, to which the zero product property is applied.
:::

:::formula{#formule-di-werner titolo="Product-to-sum formulas"}
$$
\begin{aligned}
\sin a \sin b &= \frac{\cos(a - b) - \cos(a + b)}{2} \\[4pt]
\cos a \cos b &= \frac{\cos(a - b) + \cos(a + b)}{2} \\[4pt]
\sin a \cos b &= \frac{\sin(a + b) + \sin(a - b)}{2}
\end{aligned}
$$
They hold for all real $a, b$ and transform a product into a sum.
:::

## Trigonometric equations and inequalities

The solving methods, with an example for each type of equation, are in the chapter [Trigonometric equations and inequalities](/en/precorso/goniometriche/teoria#equazioni-elementari).

:::formula{#equazioni-elementari titolo="Elementary equations"}
$$
\begin{aligned}
\sin x = k &\iff x = \alpha + 2n\pi \ \vee \ x = \pi - \alpha + 2n\pi \\
\cos x = k &\iff x = \alpha + 2n\pi \ \vee \ x = -\alpha + 2n\pi \\
\tan x = k &\iff x = \alpha + n\pi
\end{aligned}
$$
In each row $\alpha$ is an angle with $\sin\alpha = k$, $\cos\alpha = k$, $\tan\alpha = k$ respectively, and $n \in \mathbb{Z}$. The first two hold for $|k| \leq 1$, and for $|k| > 1$ the equations have no solutions; the third holds for every real $k$.
:::

:::formula{#arcoseno-arcocoseno-arcotangente titolo="Arcsine, arccosine and arctangent"}
$$
\begin{aligned}
\alpha = \arcsin k &\in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right] \\[4pt]
\alpha = \arccos k &\in [0, \pi] \\[4pt]
\alpha = \arctan k &\in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)
\end{aligned}
$$
These are the angles used as $\alpha$ when $k$ is not a special value; the first two exist for $|k| \leq 1$, the arctangent for every real $k$. For example the solutions of $\tan x = 2$ are $x = \arctan 2 + n\pi$.
:::

:::formula{#casi-particolari titolo="Particular cases"}
$$
\begin{aligned}
\sin x = 0 &\iff x = n\pi, & \cos x = 0 &\iff x = \frac{\pi}{2} + n\pi \\[4pt]
\sin x = 1 &\iff x = \frac{\pi}{2} + 2n\pi, & \cos x = 1 &\iff x = 2n\pi \\[4pt]
\sin x = -1 &\iff x = -\frac{\pi}{2} + 2n\pi, & \cos x = -1 &\iff x = \pi + 2n\pi
\end{aligned}
$$
They hold with $n \in \mathbb{Z}$. In these cases the two families of solutions of the elementary equations reduce to one.
:::

:::formula{#uguaglianza-di-due-funzioni titolo="Equality of two sines, of two cosines, of two tangents"}
$$
\begin{aligned}
\sin A = \sin B &\iff A = B + 2n\pi \ \vee \ A = \pi - B + 2n\pi \\
\cos A = \cos B &\iff A = B + 2n\pi \ \vee \ A = -B + 2n\pi \\
\tan A = \tan B &\iff A = B + n\pi
\end{aligned}
$$
They hold with $n \in \mathbb{Z}$, the third where $\tan A$ and $\tan B$ are defined. The equation $\sin A = \cos B$ is reduced to the first by writing $\cos B = \sin\left(\dfrac{\pi}{2} - B\right)$.
:::

:::formula{#secondo-grado-in-seno-o-coseno titolo="Quadratic equations in sine or cosine"}
$$
a \sin^2 x + b \sin x + c = 0 \quad \xrightarrow{\ t \, = \, \sin x\ } \quad
\begin{cases}
a t^2 + b t + c = 0 \\
-1 \leq t \leq 1
\end{cases}
$$
Every root $t$ with $|t| \leq 1$ gives the elementary equation $\sin x = t$, and the roots with $|t| > 1$ are discarded; the same holds with $t = \cos x$. If $\sin^2 x$ and $\cos x$ appear, the substitution $\sin^2 x = 1 - \cos^2 x$ brings the equation to a single function.
:::

:::formula{#equazioni-omogenee titolo="Homogeneous quadratic equations"}
$$
a \sin^2 x + b \sin x \cos x + c \cos^2 x = 0 \iff a \tan^2 x + b \tan x + c = 0
$$
It holds for $a \neq 0$, because in this case the points with $\cos x = 0$ are not solutions and the division by $\cos^2 x$ loses no solutions. For $a = 0$ one factors out $\cos x$. With a constant term $d$ on the right-hand side one writes $d = d\,(\sin^2 x + \cos^2 x)$ and the equation becomes homogeneous.
:::

:::formula{#metodo-angolo-aggiunto titolo="Auxiliary angle method"}
$$
\begin{gathered}
a \sin x + b \cos x = R \sin(x + \varphi), \qquad R = \sqrt{a^2 + b^2}, \\[6pt]
\begin{cases}
\cos\varphi = \dfrac{a}{R} \\[8pt]
\sin\varphi = \dfrac{b}{R}
\end{cases}
\end{gathered}
$$
It holds for $a$ and $b$ not both zero. The linear equation $a \sin x + b \cos x = c$ becomes $\sin(x + \varphi) = \dfrac{c}{R}$, which has solutions *if and only if* $|c| \leq R$.
:::

:::attenzione
Dividing by a factor that can vanish loses solutions. In $\sin x \cos x = \cos x$ factoring gives $\cos x\,(\sin x - 1) = 0$, with solutions $x = \dfrac{\pi}{2} + n\pi$; dividing by $\cos x$ would leave only $\sin x = 1$, that is, $x = \dfrac{\pi}{2} + 2n\pi$.
:::

:::formula{#disequazioni-goniometriche titolo="Elementary inequalities"}
$$
\begin{aligned}
\sin x > k &\iff \alpha + 2n\pi < x < \pi - \alpha + 2n\pi \\
\sin x < k &\iff \pi - \alpha + 2n\pi < x < 2\pi + \alpha + 2n\pi \\
\cos x > k &\iff -\beta + 2n\pi < x < \beta + 2n\pi \\
\cos x < k &\iff \beta + 2n\pi < x < 2\pi - \beta + 2n\pi \\
\tan x > m &\iff \gamma + n\pi < x < \frac{\pi}{2} + n\pi
\end{aligned}
$$
The first four hold for $|k| < 1$, with $\alpha = \arcsin k$ and $\beta = \arccos k$; the last holds for every real $m$, with $\gamma = \arctan m$, and $n \in \mathbb{Z}$. For $k \geq 1$ the inequality $\sin x > k$ has no solutions, for $k < -1$ it is satisfied by every $x$ and for $k = -1$ by every $x$ with $\sin x \neq -1$; the same holds for the cosine.
:::

## Lines and the Cartesian plane

The formulas for the line are derived in the chapter [Analytic geometry and conic sections](/en/precorso/geometria-analitica/teoria).

:::formula{#distanza-e-punto-medio titolo="Distance between two points and midpoint"}
$$
\overline{AB} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}, \qquad M\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)
$$
They hold for $A(x_1, y_1)$ and $B(x_2, y_2)$. The distance is the Pythagorean theorem applied to the triangle with legs $|x_2 - x_1|$ and $|y_2 - y_1|$.
:::

:::formula{#equazione-della-retta titolo="Equation of a line"}
$$
y = mx + q, \qquad ax + by + c = 0, \qquad m = -\frac{a}{b}, \quad q = -\frac{c}{b}
$$
The slope-intercept form describes the non-vertical lines, the general form, with $(a, b) \neq (0, 0)$, describes every line; the passage from one to the other holds for $b \neq 0$. Vertical lines have equation $x = k$, horizontal lines $y = k$.
:::

:::formula{#coefficiente-angolare titolo="Slope and line through a point"}
$$
m = \frac{y_2 - y_1}{x_2 - x_1}, \qquad y - y_0 = m\,(x - x_0)
$$
The first is the slope of the line through $A(x_1, y_1)$ and $B(x_2, y_2)$ and holds for $x_1 \neq x_2$. The second is the line with slope $m$ passing through $P(x_0, y_0)$; as $m$ varies it describes the pencil of non-vertical lines through $P$.
:::

:::formula{#retta-per-due-punti titolo="Line through two points"}
$$
\frac{y - y_1}{y_2 - y_1} = \frac{x - x_1}{x_2 - x_1}
$$
It holds for $x_1 \neq x_2$ and $y_1 \neq y_2$. If $x_1 = x_2$ the line is $x = x_1$, if $y_1 = y_2$ it is $y = y_1$.
:::

:::formula{#parallele-e-perpendicolari titolo="Parallel and perpendicular lines"}
$$
r \parallel s \iff m_1 = m_2, \qquad r \perp s \iff m_1 m_2 = -1
$$
They hold for non-vertical lines with slopes $m_1$ and $m_2$; the perpendicular line therefore has slope $-\dfrac{1}{m_1}$. In general form the lines $ax + by + c = 0$ and $a'x + b'y + c' = 0$ are parallel if and only if $ab' - a'b = 0$ and perpendicular if and only if $aa' + bb' = 0$.
:::

:::formula{#distanza-punto-retta titolo="Distance from a point to a line"}
$$
d(P, r) = \frac{|a x_0 + b y_0 + c|}{\sqrt{a^2 + b^2}}
$$
It holds for the point $P(x_0, y_0)$ and the line $r$ written in general form $ax + by + c = 0$.
:::

:::formula{#intersezione-di-due-rette titolo="Intersection of two lines"}
$$
\begin{cases}
ax + by + c = 0 \\
a'x + b'y + c' = 0
\end{cases}
$$
The solutions of the system are the coordinates of the points common to the two lines. The system has exactly one solution if $ab' - a'b \neq 0$, none if the lines are parallel and distinct, infinitely many if they coincide.
:::

## Conic sections

The definitions as loci and the procedure for reduction to standard form are in the chapter [Analytic geometry and conic sections](/en/precorso/geometria-analitica/teoria#riconoscere-una-conica).

:::formula{#parabola titolo="Parabola with vertical axis"}
$$
y = ax^2 + bx + c, \qquad V\left(-\frac{b}{2a}, -\frac{\Delta}{4a}\right), \qquad x = -\frac{b}{2a}
$$
It holds for $a \neq 0$, with $\Delta = b^2 - 4ac$; the line $x = -\dfrac{b}{2a}$ is the axis of symmetry, and the ordinate of the vertex is also obtained by substituting $x_V$ into the equation. The parabola opens upward for $a > 0$ and downward for $a < 0$; it meets the $y$-axis at $(0, c)$ and the $x$-axis at the solutions of $ax^2 + bx + c = 0$.
:::

:::formula{#fuoco-e-direttrice titolo="Focus and directrix of the parabola"}
$$
F\left(-\frac{b}{2a}, \frac{1 - \Delta}{4a}\right), \qquad y = -\frac{1 + \Delta}{4a}
$$
They hold for the parabola $y = ax^2 + bx + c$ with $a \neq 0$. The parabola is the locus of the points equidistant from the focus $F$ and from the directrix.
:::

:::formula{#parabola-asse-orizzontale titolo="Parabola with horizontal axis"}
$$
x = ay^2 + by + c, \qquad V\left(-\frac{\Delta}{4a}, -\frac{b}{2a}\right), \qquad y = -\frac{b}{2a}
$$
It holds for $a \neq 0$, with $\Delta = b^2 - 4ac$. It is obtained from the parabola with vertical axis by exchanging $x$ and $y$; the parabola opens to the right for $a > 0$ and to the left for $a < 0$.
:::

:::formula{#circonferenza titolo="Circle"}
$$
(x - x_0)^2 + (y - y_0)^2 = r^2, \qquad x^2 + y^2 + ax + by + c = 0
$$
The first is the circle with center $C(x_0, y_0)$ and radius $r > 0$. Expanding the squares one obtains the second, with $a = -2x_0$, $b = -2y_0$ and $c = x_0^2 + y_0^2 - r^2$.
:::

:::formula{#centro-e-raggio titolo="Center and radius from the general form"}
$$
C\left(-\frac{a}{2}, -\frac{b}{2}\right), \qquad r = \sqrt{\frac{a^2}{4} + \frac{b^2}{4} - c}
$$
The equation $x^2 + y^2 + ax + by + c = 0$ represents a circle *only if* $\dfrac{a^2}{4} + \dfrac{b^2}{4} - c > 0$. If the quantity is zero the equation represents only the point $C$, if it is negative no point.
:::

:::formula{#completamento-del-quadrato titolo="Completing the square"}
$$
x^2 + kx = \left(x + \frac{k}{2}\right)^2 - \frac{k^2}{4}, \qquad Ax^2 + Bx = A\left(x + \frac{B}{2A}\right)^2 - \frac{B^2}{4A}
$$
The first holds for every real $k$, the second for $A \neq 0$. By completing the square in $x$ and in $y$ a second-degree equation without the $xy$ term is brought to standard form.
:::

:::formula{#retta-e-circonferenza titolo="Position of a line relative to a circle"}
$$
\begin{aligned}
d(C, s) < r &\iff s \ \text{is a secant} \\
d(C, s) = r &\iff s \ \text{is a tangent} \\
d(C, s) > r &\iff s \ \text{is external}
\end{aligned}
$$
Here $d(C, s)$ is the distance from the center $C$ to the line $s$, computed with the formula for the distance from a point to a line, and $r$ is the radius.
:::

:::formula{#ellisse titolo="Ellipse"}
$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, \qquad c^2 = a^2 - b^2 \quad (a > b)
$$
It holds for $a, b > 0$. The vertices are $(\pm a, 0)$ and $(0, \pm b)$; if $a > b$ the foci are $(\pm c, 0)$, if $b > a$ they are $(0, \pm c)$ with $c^2 = b^2 - a^2$. The eccentricity is the ratio of $c$ to the semi-major axis and is less than $1$.
:::

:::formula{#iperbole titolo="Hyperbola"}
$$
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad c^2 = a^2 + b^2, \qquad y = \pm\frac{b}{a}\,x
$$
It holds for $a, b > 0$. The vertices are $(\pm a, 0)$, the foci $(\pm c, 0)$ and the lines $y = \pm\dfrac{b}{a}x$ are the asymptotes. The equation $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = -1$ represents the hyperbola with vertices $(0, \pm b)$, foci $(0, \pm c)$ and the same asymptotes.
:::

:::formula{#iperbole-equilatera titolo="Rectangular hyperbola referred to its asymptotes"}
$$
xy = k
$$
It holds for $k \neq 0$, and the asymptotes are the coordinate axes. For $k > 0$ the branches lie in the first and third quadrants, with vertices $(\sqrt{k}, \sqrt{k})$ and $(-\sqrt{k}, -\sqrt{k})$; for $k < 0$ they lie in the second and fourth.
:::

:::formula{#funzione-omografica titolo="Homographic function"}
$$
y = \frac{ax + b}{cx + d}, \qquad x = -\frac{d}{c}, \qquad y = \frac{a}{c}
$$
It holds for $c \neq 0$ and $ad - bc \neq 0$. The graph is a rectangular hyperbola with vertical asymptote $x = -\dfrac{d}{c}$ and horizontal asymptote $y = \dfrac{a}{c}$; for $ad - bc = 0$ the function is constant where it is defined.
:::

:::formula{#riconoscere-una-conica titolo="Identifying a conic section"}
$$
Ax^2 + Cy^2 + Dx + Ey + F = 0
$$
- exactly one of $A$ and $C$ is zero and the other variable appears to the first degree: parabola;
- $A = C \neq 0$: circle;
- $A$ and $C$ with the same sign and different: ellipse;
- $A$ and $C$ with opposite signs: hyperbola.

Completing the squares confirms the type and can give a degenerate case: a point, no point or a pair of lines.
:::

:::formula{#conica-traslata titolo="Translated ellipse and hyperbola"}
$$
\frac{(x - x_0)^2}{a^2} + \frac{(y - y_0)^2}{b^2} = 1, \qquad \frac{(x - x_0)^2}{a^2} - \frac{(y - y_0)^2}{b^2} = 1
$$
They are the standard ellipse and hyperbola translated by the vector $(x_0, y_0)$, therefore center, vertices, foci and asymptotes are obtained from the standard ones by adding $x_0$ to the abscissas and $y_0$ to the ordinates.
:::

:::formula{#retta-e-conica titolo="Position of a line relative to a conic section"}
$$
\begin{cases}
y = mx + q \\
f(x, y) = 0
\end{cases}
\quad \longrightarrow \quad \alpha x^2 + \beta x + \gamma = 0
$$
Substituting the equation of the line into that of the conic $f(x, y) = 0$ one obtains the resolvent equation; if it is of second degree, the line is a secant for $\Delta > 0$, a tangent for $\Delta = 0$ and external for $\Delta < 0$. The tangent lines from a point $P(x_0, y_0)$ are found by imposing $\Delta = 0$ on the line $y - y_0 = m(x - x_0)$; the vertical line $x = x_0$ is checked separately.
:::
