---
titolo: Sequences of real numbers
sommario: What it means for a sequence to have a limit, which theorems allow it to be computed, how infinities are compared, and what the Bolzano-Weierstrass theorem guarantees.
---

## Sequences and limits

A sequence is an ordered, infinite list of real numbers. The limit describes the value that the terms approach as the index grows.

:::definizione{#successione titolo="Sequence"}
A **sequence** of real numbers is a function $a : \mathbb{N} \to \mathbb{R}$. The value at $n$ is written $a_n$ and is called the **term** of index $n$; the sequence is denoted by $(a_n)$. A sequence may also be defined only for $n \geq n_0$, as $a_n = \dfrac{1}{n}$ for $n \geq 1$.

- $a_n = \dfrac{1}{n}$ has terms $1, \dfrac{1}{2}, \dfrac{1}{3}, \dots$
- $a_n = (-1)^n$ has terms $1, -1, 1, -1, \dots$ for $n \geq 0$.
- $a_n = n^2$ has terms $0, 1, 4, 9, \dots$

A property holds **eventually** if there exists $N \in \mathbb{N}$ such that the property holds for every $n > N$. For example $n^2 > 100$ holds eventually, because it holds for every $n > 10$. The limit depends *only* on what happens eventually: changing a finite number of terms does not change it.
:::

:::definizione{#limite-finito titolo="Finite limit"}
We write $\displaystyle\lim_{n \to +\infty} a_n = L$, with $L \in \mathbb{R}$, if for every $\varepsilon > 0$ there exists $N \in \mathbb{N}$ such that
$$
|a_n - L| < \varepsilon \qquad \text{for every } n > N .
$$
The number $\varepsilon$ is the maximum distance allowed from $L$, while $N$ is the index beyond which *all* the terms respect that distance. In other words, however a strip $(L - \varepsilon, L + \varepsilon)$ is chosen, the terms of the sequence eventually belong to it. In general $N$ depends on $\varepsilon$: a narrower strip corresponds to a larger index $N$.

::grafico{punti="1,0.0000,pieno;2,1.5000,pieno;3,0.6667,pieno;4,1.2500,pieno;5,0.8000,pieno;6,1.1667,pieno;7,0.8571,pieno;8,1.1250,pieno;9,0.8889,pieno;10,1.1000,pieno;11,0.9091,pieno;12,1.0833,pieno;13,0.9231,pieno;14,1.0714,pieno;15,0.9333,pieno;16,1.0625,pieno" asintoti="y=1.2;y=0.8" xmin=-1 xmax=17 ymin=-0.3 ymax=1.8 nomi="n,a" titolo="$a_n = 1 + \dfrac{(-1)^n}{n}$ has limit $1$: with $\varepsilon = 0.2$ the terms lie between the lines $y = 0.8$ and $y = 1.2$ for every $n > 5$"}

:::

:::esempio{titolo="Checking a limit with the definition"}
We verify that $\displaystyle\lim_{n \to +\infty} \frac{2n + 1}{n} = 2$. Having fixed $\varepsilon > 0$, we have
$$
\left| \frac{2n + 1}{n} - 2 \right| = \frac{1}{n} < \varepsilon
\quad\Longleftrightarrow\quad n > \frac{1}{\varepsilon} .
$$
Therefore the inequality holds for every $n > N$, choosing as $N$ a natural number greater than or equal to $\dfrac{1}{\varepsilon}$. With $\varepsilon = \dfrac{1}{100}$, $N = 100$ is enough.
:::

:::definizione{#limite-infinito titolo="Infinite limit"}
We write $\displaystyle\lim_{n \to +\infty} a_n = +\infty$ if for every $M > 0$ there exists $N \in \mathbb{N}$ such that $a_n > M$ for every $n > N$. We write $\displaystyle\lim_{n \to +\infty} a_n = -\infty$ if for every $M > 0$ there exists $N$ such that $a_n < -M$ for every $n > N$. The number $M$ is an arbitrary threshold: the terms eventually exceed it, however it has been chosen.

For $a_n = n^2$ and $M > 0$ we have $n^2 > M$ for every $n > \sqrt{M}$, therefore $n^2 \to +\infty$.
:::

:::definizione{#carattere titolo="Convergent, divergent and indeterminate sequences"}
A sequence is **convergent** if it has a finite limit, **divergent** if it has limit $+\infty$ or $-\infty$, **indeterminate** (or irregular) if it has no limit. A sequence converging to $0$ is called **infinitesimal**. Determining the **behavior** of a sequence means stating which of the three cases it falls into.

- $a_n = \dfrac{1}{n}$ is convergent, with limit $0$.
- $a_n = n^2$ diverges to $+\infty$.
- $a_n = (-1)^n$ is indeterminate, because the terms of even index equal $1$ and those of odd index equal $-1$, and therefore no strip of width less than $2$ eventually contains all of them.
:::

## Uniqueness of the limit and bounded sequences

The two theorems of this section are the first consequences of the definition. The second provides a *necessary* condition for convergence.

::::teorema{#unicita-del-limite titolo="Uniqueness of the limit"}
If a sequence has a limit, the limit is **unique**. This is why we write $\lim a_n = L$ with the equals sign.

:::dimostrazione
The argument is by contradiction, choosing two disjoint strips around the two limits. Let $L_1 \neq L_2$ be two finite limits of $(a_n)$ and $\varepsilon = \dfrac{|L_1 - L_2|}{2} > 0$. There exist $N_1$ and $N_2$ such that $|a_n - L_1| < \varepsilon$ for $n > N_1$ and $|a_n - L_2| < \varepsilon$ for $n > N_2$. For $n > \max\{N_1, N_2\}$ both inequalities hold, therefore by the triangle inequality
$$
|L_1 - L_2| \leq |L_1 - a_n| + |a_n - L_2| < 2\varepsilon = |L_1 - L_2| ,
$$
which is **a contradiction**. If one of the two limits is infinite the argument is the same: the terms cannot be eventually greater than $M$ and, at the same time, eventually contained in a bounded strip.
:::
::::

:::definizione{#successione-limitata titolo="Bounded sequence"}
$(a_n)$ is **bounded above** if there exists $M \in \mathbb{R}$ with $a_n \leq M$ for every $n$, **bounded below** if there exists $m$ with $a_n \geq m$ for every $n$. It is **bounded** if it is both bounded above and bounded below, that is, if there exists $K > 0$ such that $|a_n| \leq K$ for every $n$.

- $a_n = (-1)^n$ is bounded, with $|a_n| \leq 1$.
- $a_n = n^2$ is bounded below by $0$ and is *not* bounded above.
- $a_n = \dfrac{n}{n + 1}$ is bounded, because $0 \leq a_n < 1$.
:::

::::teorema{#convergente-limitata titolo="Every convergent sequence is bounded"}
If $(a_n)$ is convergent, then it is **bounded**. Consequently a sequence that is *not* bounded cannot converge: $a_n = n^2$ and $a_n = (-1)^n n$ are not convergent.

:::dimostrazione
Beyond a certain index the terms lie in a strip around the limit; the preceding terms are finitely many. Let $a_n \to L$. With $\varepsilon = 1$ there exists $N$ such that $|a_n - L| < 1$ for every $n > N$, therefore for these indices
$$
|a_n| \leq |a_n - L| + |L| < 1 + |L| .
$$
The terms $a_1, \dots, a_N$ are finitely many, hence the number
$$
K = \max\{ |a_1|, \dots, |a_N|, 1 + |L| \}
$$
exists and satisfies $|a_n| \leq K$ for **every** $n$.
:::
::::

:::attenzione
The converse of the theorem is false: a bounded sequence may have no limit. The sequence $a_n = (-1)^n$ is bounded and indeterminate. Boundedness is a *necessary* condition for convergence, not a *sufficient* one.
:::

## Operations with limits and indeterminate forms

The definition with $\varepsilon$ and $N$ is inconvenient for computation. The theorems that follow reduce the limit of an expression to the limits of the sequences that compose it.

:::teorema{#algebra-dei-limiti titolo="Limits of sums, products and quotients"}
If $a_n \to a$ and $b_n \to b$, with $a, b \in \mathbb{R}$, then
$$
a_n + b_n \to a + b, \qquad a_n\, b_n \to a\, b, \qquad \frac{a_n}{b_n} \to \frac{a}{b} \quad (b \neq 0) .
$$
Moreover $|a_n| \to |a|$ and, if $a_n \geq 0$, $\sqrt{a_n} \to \sqrt{a}$. The proofs follow from the definition and from the triangle inequality and are omitted. The rules extend to infinite limits, with $a \in \mathbb{R}$:
$$
\begin{gathered}
a + (+\infty) = +\infty, \qquad (+\infty) + (+\infty) = +\infty, \qquad \frac{a}{\pm\infty} = 0, \\[6pt]
a \cdot (+\infty) = +\infty \ \text{ if } a > 0, \qquad a \cdot (+\infty) = -\infty \ \text{ if } a < 0 .
\end{gathered}
$$
If $a_n \to 0$ and $a_n > 0$ eventually, then $\dfrac{1}{a_n} \to +\infty$.
:::

:::definizione{#forme-indeterminate titolo="Indeterminate forms"}
The preceding rules do not assign a value to the combinations
$$
+\infty - \infty, \qquad 0 \cdot \infty, \qquad \frac{\infty}{\infty}, \qquad \frac{0}{0}, \qquad 1^{\infty}, \qquad 0^{0}, \qquad \infty^{0} .
$$
In an **indeterminate form** the limit depends on the sequences involved and is computed after transforming the expression. For example $a_n = n$ and $b_n = n^2$ both diverge, and the ratios $\dfrac{a_n}{b_n}$, $\dfrac{b_n}{a_n}$, $\dfrac{2a_n}{a_n}$ tend respectively to $0$, to $+\infty$ and to $2$.
:::

:::esempio{titolo="Ratio of polynomials in n"}
$$
\lim_{n \to +\infty} \frac{3n^2 - n}{2n^2 + 5}
= \lim_{n \to +\infty} \frac{n^2 \left( 3 - \dfrac{1}{n} \right)}{n^2 \left( 2 + \dfrac{5}{n^2} \right)}
= \frac{3 - 0}{2 + 0} = \frac{3}{2}
$$
The ratio is in the form $\dfrac{\infty}{\infty}$. The **highest power** is factored out of the numerator and of the denominator; the terms $\dfrac{1}{n}$ and $\dfrac{5}{n^2}$ are infinitesimal, therefore the limit is the ratio of the leading coefficients.
:::

:::esempio{titolo="Difference of infinities with a square root"}
$$
\begin{aligned}
\sqrt{n^2 + n} - n
&= \frac{\left( \sqrt{n^2 + n} - n \right)\left( \sqrt{n^2 + n} + n \right)}{\sqrt{n^2 + n} + n} \\[6pt]
&= \frac{n}{\sqrt{n^2 + n} + n}
= \frac{1}{\sqrt{1 + \dfrac{1}{n}} + 1} \to \frac{1}{2}
\end{aligned}
$$
The difference is in the form $+\infty - \infty$. Multiplying and dividing by the sum $\sqrt{n^2 + n} + n$, the numerator becomes $(n^2 + n) - n^2 = n$; then the numerator and the denominator are divided by $n$.
:::

## Comparison theorems

These theorems derive information about a sequence by comparing it with others whose limit is known. They are needed when the expression of $a_n$ does not lend itself to direct computation.

::::teorema{#permanenza-del-segno titolo="Sign-preservation theorem"}
If $a_n \to L$ with $L > 0$ or $L = +\infty$, then $a_n > 0$ **eventually**. Similarly, if $L < 0$ or $L = -\infty$, then $a_n < 0$ eventually.

:::dimostrazione
A strip around $L$ that does not contain $0$ is chosen. For $L$ finite and positive the definition is applied with $\varepsilon = \dfrac{L}{2} > 0$: there exists $N$ such that $|a_n - L| < \dfrac{L}{2}$ for every $n > N$, therefore
$$
a_n > L - \frac{L}{2} = \frac{L}{2} > 0 \qquad \text{for every } n > N .
$$
For $L = +\infty$ the definition is applied with $M = 1$.
:::
::::

:::osservazione
It follows from the theorem that, if $a_n \geq 0$ eventually and $a_n \to L$, then $L \geq 0$: if $L < 0$, the terms would be eventually negative. Applying this fact to $b_n - a_n$ shows that $a_n \leq b_n$ eventually, $a_n \to a$ and $b_n \to b$ imply $a \leq b$. The strict inequality is *not* preserved in the limit: $\dfrac{1}{n} > 0$ for every $n$ and the limit is $0$.
:::

::::teorema{#teorema-dei-carabinieri titolo="Squeeze theorem"}
Let $(a_n)$, $(b_n)$, $(c_n)$ be three sequences such that
$$
\begin{cases}
a_n \leq b_n \leq c_n \quad \text{eventually} \\[4pt]
a_n \to L \ \text{ and } \ c_n \to L, \quad L \in \mathbb{R}
\end{cases}
$$
Then $b_n \to L$. The theorem computes the limit of $b_n$ without using its expression: two sequences with the *same* limit that enclose it are enough.

:::dimostrazione
The two outer sequences eventually lie in the strip $(L - \varepsilon, L + \varepsilon)$, therefore so does the one between them. Having fixed $\varepsilon > 0$, there exist $N_1$ and $N_2$ such that $a_n > L - \varepsilon$ for $n > N_1$ and $c_n < L + \varepsilon$ for $n > N_2$; let $N_3$ be an index beyond which $a_n \leq b_n \leq c_n$ holds. For $n > \max\{N_1, N_2, N_3\}$ we have
$$
L - \varepsilon < a_n \leq b_n \leq c_n < L + \varepsilon ,
$$
that is, $|b_n - L| < \varepsilon$.
:::
::::

:::teorema{#confronto-divergenti titolo="Comparison for divergent sequences"}
If $a_n \leq b_n$ eventually and $a_n \to +\infty$, then $b_n \to +\infty$. If $a_n \leq b_n$ eventually and $b_n \to -\infty$, then $a_n \to -\infty$. With infinite limits *one* inequality is enough: having fixed $M > 0$, from $a_n > M$ eventually it follows that $b_n \geq a_n > M$ eventually.

For example $n + \sin n \geq n - 1$ for every $n$ and $n - 1 \to +\infty$, therefore $n + \sin n \to +\infty$.
:::

::::teorema{#limitata-per-infinitesima titolo="Product of a bounded sequence and an infinitesimal one"}
If $(a_n)$ is bounded and $b_n \to 0$, then $a_n\, b_n \to 0$. The theorem applies even when $(a_n)$ has no limit, and therefore the theorem on the limit of a product cannot be used.

:::dimostrazione
The bounded factor is bounded by a constant, which does not prevent the product from becoming small. Let $K > 0$ be such that $|a_n| \leq K$ for every $n$. Having fixed $\varepsilon > 0$, since $b_n \to 0$ there exists $N$ such that $|b_n| < \dfrac{\varepsilon}{K}$ for every $n > N$. Therefore for $n > N$
$$
|a_n\, b_n| = |a_n| \cdot |b_n| < K \cdot \frac{\varepsilon}{K} = \varepsilon .
$$
:::
::::

:::esempio
$$
\lim_{n \to +\infty} \frac{\sin n}{n} = 0
$$
The sequence $\sin n$ is bounded, because $|\sin n| \leq 1$, and $\dfrac{1}{n} \to 0$. By the theorem the product $\sin n \cdot \dfrac{1}{n}$ is **infinitesimal**, even though $\sin n$ has no limit.

::grafico{f="1/x+0*sqrt(x-1);-1/x+0*sqrt(x-1)" punti="1,0.8415,pieno;2,0.4546,pieno;3,0.0470,pieno;4,-0.1892,pieno;5,-0.1918,pieno;6,-0.0466,pieno;7,0.0939,pieno;8,0.1237,pieno;9,0.0458,pieno;10,-0.0544,pieno;11,-0.0909,pieno;12,-0.0447,pieno;13,0.0323,pieno;14,0.0708,pieno;15,0.0434,pieno;16,-0.0180,pieno;17,-0.0566,pieno;18,-0.0417,pieno;19,0.0079,pieno;20,0.0456,pieno" xmin=-1 xmax=21 ymin=-1.1 ymax=1.1 nomi="n,a" legenda="a = \dfrac{1}{n};a = -\dfrac{1}{n}" titolo="The terms $\dfrac{\sin n}{n}$ lie between $-\dfrac{1}{n}$ and $\dfrac{1}{n}$, which both tend to $0$"}

:::

## Monotone sequences

For an arbitrary sequence the existence of the limit is not guaranteed. For monotone sequences it always is, and this makes it possible to prove that a limit exists even when it cannot be computed.

:::definizione{#successione-monotona titolo="Monotone sequence"}
$(a_n)$ is **increasing** if $a_n \leq a_{n+1}$ for every $n$, **strictly increasing** if $a_n < a_{n+1}$ for every $n$. It is **decreasing** if $a_n \geq a_{n+1}$ for every $n$, strictly decreasing with the strict inequality. An increasing or decreasing sequence is called **monotone**. Monotonicity is checked by studying the sign of $a_{n+1} - a_n$ or, if the terms are positive, by comparing the ratio $\dfrac{a_{n+1}}{a_n}$ with $1$.

For $a_n = \dfrac{n}{n + 1}$ we have
$$
a_{n+1} - a_n = \frac{n + 1}{n + 2} - \frac{n}{n + 1} = \frac{1}{(n + 1)(n + 2)} > 0 ,
$$
therefore the sequence is strictly increasing.
:::

::::teorema{#successioni-monotone titolo="Monotone sequence theorem"}
Every monotone sequence **has a limit**. More precisely, if $(a_n)$ is increasing,
$$
\lim_{n \to +\infty} a_n = \sup \{ a_n : n \in \mathbb{N} \} ,
$$
therefore $(a_n)$ converges if it is bounded above and diverges to $+\infty$ if it is not. If $(a_n)$ is decreasing, the limit is the infimum of the terms. In particular a monotone and bounded sequence is **convergent**.

:::dimostrazione
The terms approach their supremum and, by monotonicity, never move away from it again. Let $(a_n)$ be increasing and bounded above and let $L = \sup \{ a_n \}$, which exists and is finite by the **completeness** of $\mathbb{R}$. Having fixed $\varepsilon > 0$, the number $L - \varepsilon$ is not an upper bound, therefore there exists an index $N$ with $a_N > L - \varepsilon$. For $n > N$ monotonicity gives $a_n \geq a_N$, and $L$ is an upper bound, hence
$$
L - \varepsilon < a_N \leq a_n \leq L < L + \varepsilon ,
$$
that is, $|a_n - L| < \varepsilon$. If $(a_n)$ is not bounded above, having fixed $M > 0$ there exists $N$ with $a_N > M$, therefore $a_n \geq a_N > M$ for every $n > N$ and $a_n \to +\infty$. The decreasing case is obtained by applying the result to $(-a_n)$.
:::
::::

:::richiamo{titolo="Characterization of the supremum"}
$L = \sup A$ if and only if $L$ is an upper bound of $A$ and for every $\varepsilon > 0$ there exists $x \in A$ with $x > L - \varepsilon$.
:::

:::esempio{titolo="A sequence defined by recurrence"}
Let $a_1 = 1$ and $a_{n+1} = \sqrt{2 + a_n}$. By induction one checks that $0 < a_n < 2$: it holds for $a_1$ and, if $a_n < 2$, then $a_{n+1} = \sqrt{2 + a_n} < \sqrt{4} = 2$. The sequence is increasing, because
$$
a_{n+1} > a_n \iff 2 + a_n > a_n^2 \iff (a_n - 2)(a_n + 1) < 0 ,
$$
and the last inequality holds for $0 < a_n < 2$. By the **monotone sequence theorem** the limit $L$ exists and is finite. Passing to the limit in the relation $a_{n+1}^2 = 2 + a_n$ gives $L^2 = 2 + L$, that is, $L = 2$ or $L = -1$; since $a_n > 0$, the limit is $L = 2$.
:::

## The number e

The monotone sequence theorem makes it possible to define the number $e$ as the limit of a sequence whose limit value is not known in advance.

::::teorema{#numero-e titolo="The number e"}
The sequence
$$
a_n = \left( 1 + \frac{1}{n} \right)^{n}, \qquad n \geq 1,
$$
is strictly increasing and bounded, with $2 \leq a_n < 4$, therefore it is **convergent**. Its limit is denoted by $e$ and is called **Napier's number** (or Euler's number):
$$
e = \lim_{n \to +\infty} \left( 1 + \frac{1}{n} \right)^{n} .
$$
The number $e$ is irrational and equals $2.71828\ldots$ It is the base of natural logarithms and of the exponential function $e^x$.

::grafico{punti="1,2.0000,pieno;2,2.2500,pieno;3,2.3704,pieno;4,2.4414,pieno;5,2.4883,pieno;6,2.5216,pieno;7,2.5465,pieno;8,2.5658,pieno;9,2.5812,pieno;10,2.5937,pieno;11,2.6042,pieno;12,2.6130,pieno;13,2.6206,pieno;14,2.6272,pieno" asintoti="y=2.7183" xmin=-1 xmax=15 ymin=-0.3 ymax=3.3 nomi="n,a" titolo="The terms $\left(1 + \dfrac{1}{n}\right)^{n}$ increase and stay below the line $y = e$"}

:::dimostrazione
Two consecutive terms are compared with **Bernoulli's inequality**. For $n \geq 2$
$$
\begin{aligned}
\frac{a_n}{a_{n-1}}
&= \left( \frac{n + 1}{n} \right)^{n} \left( \frac{n - 1}{n} \right)^{n-1}
= \left( \frac{n^2 - 1}{n^2} \right)^{n} \cdot \frac{n}{n - 1} \\[6pt]
&= \left( 1 - \frac{1}{n^2} \right)^{n} \cdot \frac{n}{n - 1}
\geq \left( 1 - \frac{1}{n} \right) \cdot \frac{n}{n - 1} = 1 .
\end{aligned}
$$
Bernoulli's inequality with $x = -\dfrac{1}{n^2}$ is strict for $n \geq 2$, therefore $a_n > a_{n-1}$ and the sequence is strictly increasing; in particular $a_n \geq a_1 = 2$. For boundedness we consider $b_n = \left( 1 + \dfrac{1}{n} \right)^{n+1}$, which satisfies $a_n < b_n$. For $n \geq 2$
$$
\begin{aligned}
\frac{b_{n-1}}{b_n}
&= \left( \frac{n}{n - 1} \right)^{n} \left( \frac{n}{n + 1} \right)^{n+1}
= \left( 1 + \frac{1}{n^2 - 1} \right)^{n} \cdot \frac{n}{n + 1} \\[6pt]
&\geq \left( 1 + \frac{n}{n^2 - 1} \right) \cdot \frac{n}{n + 1}
> \left( 1 + \frac{1}{n} \right) \cdot \frac{n}{n + 1} = 1 ,
\end{aligned}
$$
because $\dfrac{n}{n^2 - 1} > \dfrac{1}{n}$. Therefore $(b_n)$ is decreasing and $a_n < b_n \leq b_1 = 4$. The sequence $(a_n)$ is increasing and bounded above, hence it converges by the **monotone sequence theorem**.
:::
::::

:::richiamo{titolo="Bernoulli's inequality"}
For every $x \geq -1$ and every $n \in \mathbb{N}$ we have $(1 + x)^n \geq 1 + nx$; for $n \geq 2$ and $x \neq 0$ the inequality is strict.
:::

:::teorema{#limiti-con-e titolo="Limits that reduce to the number e"}
If $a_n \to +\infty$ or $a_n \to -\infty$, then
$$
\lim_{n \to +\infty} \left( 1 + \frac{1}{a_n} \right)^{a_n} = e .
$$
Consequently, for every $x \in \mathbb{R}$,
$$
\lim_{n \to +\infty} \left( 1 + \frac{x}{n} \right)^{n} = e^{x} .
$$
The proof of the first limit is omitted. The second, for $x \neq 0$, follows from the first with $a_n = \dfrac{n}{x}$, by writing $\left( 1 + \dfrac{x}{n} \right)^{n} = \left[ \left( 1 + \dfrac{1}{a_n} \right)^{a_n} \right]^{x}$. These limits resolve the indeterminate form $1^{\infty}$.
:::

:::esempio
$$
\lim_{n \to +\infty} \left( \frac{n + 3}{n} \right)^{2n}
= \lim_{n \to +\infty} \left[ \left( 1 + \frac{3}{n} \right)^{n} \right]^{2}
= \left( e^{3} \right)^{2} = e^{6}
$$
The base tends to $1$ and the exponent to $+\infty$, therefore we have the form $1^{\infty}$. The base is written as $1 + \dfrac{3}{n}$ and the exponent $n$ is isolated, so as to recognize the limit $\left( 1 + \dfrac{x}{n} \right)^{n} \to e^{x}$ with $x = 3$.
:::

## Standard limits

The limits of this section recur in computations and are used as established results. Together with the limits involving the number $e$ they form the standard limits of sequences.

::::teorema{#successione-geometrica titolo="Geometric sequence"}
For $q \in \mathbb{R}$ the sequence $q^n$ behaves as follows:
$$
\lim_{n \to +\infty} q^{n} =
\begin{cases}
+\infty & \text{if } q > 1 \\
1 & \text{if } q = 1 \\
0 & \text{if } -1 < q < 1
\end{cases}
$$
while for $q \leq -1$ the limit **does not exist**. The number $q$ is called the **common ratio**. This limit is the basis of the geometric series, treated in the chapter on series.

:::dimostrazione
The case $q > 1$ follows from Bernoulli's inequality and the others reduce to it. If $q > 1$ we write $q = 1 + h$ with $h > 0$, therefore $q^n = (1 + h)^n \geq 1 + nh$. Since $1 + nh \to +\infty$, by **comparison** $q^n \to +\infty$. If $0 < |q| < 1$, then $\dfrac{1}{|q|} > 1$ and $\dfrac{1}{|q|^n} \to +\infty$, hence $|q^n| = |q|^n \to 0$ and therefore $q^n \to 0$; for $q = 0$ the sequence is identically zero. If $q = -1$ the terms are alternately $1$ and $-1$. If $q < -1$ the terms of even index tend to $+\infty$ and those of odd index to $-\infty$, therefore the limit does not exist.
:::
::::

::::teorema{#radice-n-esima titolo="n-th roots"}
$$
\lim_{n \to +\infty} \sqrt[n]{a} = 1 \quad (a > 0), \qquad \lim_{n \to +\infty} \sqrt[n]{n} = 1 .
$$
These limits resolve the form $\infty^{0}$ and are needed whenever an exponent $\dfrac{1}{n}$ is applied to a constant or to a power of $n$: for example $\sqrt[n]{3n^2} = \sqrt[n]{3} \cdot \left( \sqrt[n]{n} \right)^{2} \to 1$.

:::dimostrazione
In both cases the root is written as $1 + h_n$ and one proves that $h_n \to 0$. Let $a > 1$ and $\sqrt[n]{a} = 1 + h_n$, with $h_n > 0$. By Bernoulli's inequality $a = (1 + h_n)^n \geq 1 + n h_n$, therefore
$$
0 < h_n \leq \frac{a - 1}{n} ,
$$
and by the **squeeze theorem** $h_n \to 0$. If $0 < a < 1$ the result is applied to $\dfrac{1}{a} > 1$, since $\sqrt[n]{a} = \dfrac{1}{\sqrt[n]{\frac{1}{a}}}$; for $a = 1$ the sequence is constant. For the second limit let $\sqrt[n]{n} = 1 + h_n$ with $h_n > 0$ and $n \geq 2$. In the binomial expansion all the terms are positive, therefore
$$
n = (1 + h_n)^n \geq \binom{n}{2} h_n^2 = \frac{n(n - 1)}{2}\, h_n^2 ,
\qquad\text{whence}\qquad
0 < h_n \leq \sqrt{\frac{2}{n - 1}} .
$$
By the squeeze theorem $h_n \to 0$.
:::
::::

## Ratio test and hierarchy of infinities

When $a_n$ contains factorials or powers with exponent $n$, the ratio of two consecutive terms has a simple expression. The following test derives the limit of $a_n$ from the limit of that ratio.

::::teorema{#criterio-del-rapporto titolo="Ratio test"}
Let $(a_n)$ be a sequence with positive terms and assume that the following limit exists:
$$
\ell = \lim_{n \to +\infty} \frac{a_{n+1}}{a_n} , \qquad \ell \in [0, +\infty] .
$$
- If $\ell < 1$, then $a_n \to 0$.
- If $\ell > 1$ or $\ell = +\infty$, then $a_n \to +\infty$.

For $\ell = 1$ the test gives no information.

:::dimostrazione
For $\ell < 1$ the sequence is eventually bounded above by a geometric sequence with common ratio less than $1$. We choose $q$ with $\ell < q < 1$. Since the ratio tends to $\ell$, there exists $N$ such that $\dfrac{a_{n+1}}{a_n} < q$ for every $n \geq N$, that is, $a_{n+1} < q\, a_n$. Applying the inequality $n - N$ times gives
$$
0 < a_n \leq a_N\, q^{\,n - N} \qquad \text{for every } n \geq N .
$$
The right-hand side tends to $0$, because $0 < q < 1$, therefore $a_n \to 0$ by the **squeeze theorem**. If $\ell > 1$ or $\ell = +\infty$, the sequence $b_n = \dfrac{1}{a_n}$ has ratio $\dfrac{b_{n+1}}{b_n} = \dfrac{a_n}{a_{n+1}}$, which tends to a limit less than $1$; hence $b_n \to 0$ with $b_n > 0$, and therefore $a_n \to +\infty$.
:::
::::

:::attenzione
With $\ell = 1$ every case occurs. The sequences $a_n = \dfrac{1}{n}$, $a_n = n$ and $a_n = \dfrac{n + 1}{n}$ all have ratio $\dfrac{a_{n+1}}{a_n} \to 1$, and they tend respectively to $0$, to $+\infty$ and to $1$.
:::

:::teorema{#gerarchia-degli-infiniti titolo="Infinities of increasing order"}
For $\alpha > 0$ and $a > 1$ the following limits hold:
$$
\lim_{n \to +\infty} \frac{\ln n}{n^{\alpha}} = 0, \qquad
\lim_{n \to +\infty} \frac{n^{\alpha}}{a^{n}} = 0, \qquad
\lim_{n \to +\infty} \frac{a^{n}}{n!} = 0, \qquad
\lim_{n \to +\infty} \frac{n!}{n^{n}} = 0 .
$$
The sequences $\ln n$, $n^{\alpha}$, $a^{n}$, $n!$, $n^{n}$ all diverge to $+\infty$ and are written in order of **increasing infinity**: the ratio of one of them to any of the following ones tends to $0$. The last three limits follow from the **ratio test**:
$$
\frac{(n + 1)^{\alpha}}{a^{n+1}} \cdot \frac{a^{n}}{n^{\alpha}} = \frac{1}{a} \left( 1 + \frac{1}{n} \right)^{\alpha} \to \frac{1}{a} < 1,
\qquad
\frac{a^{n+1}}{(n + 1)!} \cdot \frac{n!}{a^{n}} = \frac{a}{n + 1} \to 0 ,
$$
$$
\frac{(n + 1)!}{(n + 1)^{n+1}} \cdot \frac{n^{n}}{n!} = \left( \frac{n}{n + 1} \right)^{n} = \frac{1}{\left( 1 + \dfrac{1}{n} \right)^{n}} \to \frac{1}{e} < 1 .
$$
The first limit follows from the corresponding limit for functions, treated in the chapter on limits.
:::

:::esempio
$$
\lim_{n \to +\infty} \frac{2^{n} + n^{5}}{n! + 3^{n}}
= \lim_{n \to +\infty} \frac{2^{n} \left( 1 + \dfrac{n^{5}}{2^{n}} \right)}{n! \left( 1 + \dfrac{3^{n}}{n!} \right)}
= \lim_{n \to +\infty} \frac{2^{n}}{n!} \cdot \frac{1 + 0}{1 + 0} = 0
$$
In the numerator and in the denominator the infinity of highest order is factored out according to the **hierarchy**: $2^n$ in the numerator, $n!$ in the denominator. The ratios $\dfrac{n^5}{2^n}$ and $\dfrac{3^n}{n!}$ are infinitesimal, and the ratio $\dfrac{2^n}{n!}$ tends to $0$.
:::

## Subsequences and the Bolzano-Weierstrass theorem

From a sequence other sequences are obtained by choosing only some of the terms. Their behavior gives information about the original sequence, even when the latter has no limit.

:::definizione{#successione-estratta titolo="Subsequence"}
Let $(a_n)$ be a sequence and let $n_1 < n_2 < n_3 < \dots$ be a strictly increasing sequence of indices. The sequence $(a_{n_k})$, with $k = 1, 2, 3, \dots$, is called a **subsequence** of $(a_n)$. It is obtained from $(a_n)$ by deleting some terms and keeping the order of the remaining ones. Since the indices are strictly increasing, $n_k \geq k$ for every $k$.

- With $n_k = 2k$ we obtain the subsequence of the terms of even index, $(a_{2k})$.
- With $n_k = 2k + 1$ we obtain the subsequence of the terms of odd index, $(a_{2k+1})$.
:::

::::teorema{#limite-delle-estratte titolo="Limit of subsequences"}
If $a_n \to L$, with $L \in \mathbb{R}$ or $L = \pm\infty$, then **every** subsequence of $(a_n)$ tends to $L$. The theorem is used mainly to prove that a limit does *not* exist: it is enough to find two subsequences with different limits.

:::dimostrazione
The indices of the subsequence exceed any threshold, therefore its terms satisfy the same inequality as the sequence. Let $L$ be finite and let $\varepsilon > 0$. There exists $N$ such that $|a_n - L| < \varepsilon$ for every $n > N$. For $k > N$ we have $n_k \geq k > N$, therefore $|a_{n_k} - L| < \varepsilon$. With $L = \pm\infty$ the argument is the same.
:::
::::

:::esempio{titolo="Two subsequences with different limits"}
Let $a_n = (-1)^n \left( 1 + \dfrac{1}{n} \right)$. The subsequence of even index is $a_{2k} = 1 + \dfrac{1}{2k} \to 1$, the one of odd index is $a_{2k+1} = -\left( 1 + \dfrac{1}{2k + 1} \right) \to -1$. If the sequence had limit $L$, both subsequences would tend to $L$; since the two limits are different, the limit of $(a_n)$ **does not exist**.

::grafico{punti="1,-2.0000,pieno;2,1.5000,pieno;3,-1.3333,pieno;4,1.2500,pieno;5,-1.2000,pieno;6,1.1667,pieno;7,-1.1429,pieno;8,1.1250,pieno;9,-1.1111,pieno;10,1.1000,pieno;11,-1.0909,pieno;12,1.0833,pieno;13,-1.0769,pieno;14,1.0714,pieno" asintoti="y=1;y=-1" xmin=-1 xmax=15 ymin=-2.3 ymax=2.3 nomi="n,a" titolo="The terms of even index approach $1$, those of odd index approach $-1$"}

:::

::::teorema{#bolzano-weierstrass titolo="Bolzano-Weierstrass theorem"}
Every **bounded** sequence has a **convergent** subsequence. The theorem guarantees a limit for a subsequence even when the sequence is indeterminate: $(-1)^n$ has no limit, and the subsequence of even index converges to $1$. The proof of the extreme value theorem, in the chapter on limits and continuity, is based on it.

:::dimostrazione
An interval containing the sequence is repeatedly halved, each time keeping a half in which infinitely many terms fall. Let $\alpha \leq a_n \leq \beta$ for every $n$ and let $I_0 = [\alpha, \beta]$. $I_0$ is divided into two halves by its midpoint. At least one of the two contains $a_n$ for infinitely many indices $n$, otherwise the indices would be finitely many; let $I_1 = [\alpha_1, \beta_1]$ be a half with this property. Repeating the procedure gives intervals $I_k = [\alpha_k, \beta_k]$, each contained in the previous one, such that
$$
\begin{cases}
I_k \text{ contains } a_n \text{ for infinitely many indices } n \\[4pt]
\beta_k - \alpha_k = \dfrac{\beta - \alpha}{2^k}
\end{cases}
$$
The sequence $(\alpha_k)$ is increasing and bounded, $(\beta_k)$ is decreasing and bounded, therefore by the **monotone sequence theorem** both converge. Since $\beta_k - \alpha_k \to 0$, they have the same limit $L$. The subsequence is now constructed: we choose $n_1$ with $a_{n_1} \in I_1$, then $n_2 > n_1$ with $a_{n_2} \in I_2$, and so on; the choice is always possible because each $I_k$ contains terms with infinitely many indices. We obtain
$$
\alpha_k \leq a_{n_k} \leq \beta_k \qquad \text{for every } k ,
$$
and by the **squeeze theorem** $a_{n_k} \to L$.
:::
::::

:::attenzione
Without the boundedness hypothesis the conclusion may fail: the sequence $a_n = n$ has no convergent subsequences, because every subsequence of it diverges to $+\infty$.
:::

## Limits of sequences and limits of functions

The following theorem connects the limit of a function with the limits of the sequences built from its values. It makes it possible to transfer the standard limits of functions to sequences, and to prove that the limit of a function does not exist.

::::teorema{#teorema-ponte titolo="Relation between limits of functions and limits of sequences"}
Let $f : A \to \mathbb{R}$, let $x_0$ be an accumulation point of $A$ (possibly $x_0 = \pm\infty$) and let $L \in \mathbb{R}$ or $L = \pm\infty$. Then
$$
\lim_{x \to x_0} f(x) = L
$$
if and only if, for **every** sequence $(x_n)$ of points of $A$ different from $x_0$ with $x_n \to x_0$, we have $f(x_n) \to L$. The result is known as the **bridge theorem** (or sequential characterization of the limit).

:::dimostrazione
We consider the case of $x_0$ and $L$ finite; the others are analogous. Let $f(x) \to L$ and let $(x_n)$ be a sequence of points of $A$ different from $x_0$ with $x_n \to x_0$. Having fixed $\varepsilon > 0$, there exists $\delta > 0$ such that $|f(x) - L| < \varepsilon$ for every $x \in A$ with $0 < |x - x_0| < \delta$. Since $x_n \to x_0$ and $x_n \neq x_0$, there exists $N$ such that $0 < |x_n - x_0| < \delta$ for $n > N$, therefore $|f(x_n) - L| < \varepsilon$ for $n > N$. Conversely, suppose by contradiction that $f(x)$ does not tend to $L$. Then there exists $\varepsilon > 0$ such that, for every $n \geq 1$, choosing $\delta = \dfrac{1}{n}$ one finds a point $x_n \in A$ with
$$
0 < |x_n - x_0| < \frac{1}{n} \qquad \text{and} \qquad |f(x_n) - L| \geq \varepsilon .
$$
The sequence $(x_n)$ tends to $x_0$ with $x_n \neq x_0$, while $f(x_n)$ does not tend to $L$: this contradicts the hypothesis.
:::
::::

:::teorema{#limiti-notevoli-successioni titolo="Standard limits transferred to sequences"}
Let $(\varepsilon_n)$ be an infinitesimal sequence with $\varepsilon_n \neq 0$. From the standard limits of functions, by the **bridge theorem**, it follows that
$$
\begin{gathered}
\frac{\sin \varepsilon_n}{\varepsilon_n} \to 1, \qquad
\frac{1 - \cos \varepsilon_n}{\varepsilon_n^{2}} \to \frac{1}{2}, \qquad
\frac{e^{\varepsilon_n} - 1}{\varepsilon_n} \to 1, \\[8pt]
\frac{\ln(1 + \varepsilon_n)}{\varepsilon_n} \to 1, \qquad
\frac{(1 + \varepsilon_n)^{\alpha} - 1}{\varepsilon_n} \to \alpha \quad (\alpha \in \mathbb{R}) .
\end{gathered}
$$
The standard limits of functions are treated in the chapter on limits. With $\varepsilon_n = \dfrac{1}{n}$ the first one gives
$$
\lim_{n \to +\infty} n \sin \frac{1}{n} = \lim_{n \to +\infty} \frac{\sin \dfrac{1}{n}}{\dfrac{1}{n}} = 1 .
$$
:::

:::esempio{titolo="A limit of a function that does not exist"}
The limit $\displaystyle\lim_{x \to +\infty} \sin x$ does not exist. The sequences $x_n = n\pi$ and $y_n = \dfrac{\pi}{2} + 2n\pi$ both tend to $+\infty$, and
$$
\sin(x_n) = 0 \to 0, \qquad \sin(y_n) = 1 \to 1 .
$$
If the limit existed and equaled $L$, by the **bridge theorem** both sequences of values would tend to $L$; since the two limits are different, the limit **does not exist**.
:::
