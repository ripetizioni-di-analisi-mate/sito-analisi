---
titolo: Sequences, progressions, and series
sommario: Sequences describe quantities that change at regular intervals. This chapter covers terms and sums of arithmetic and geometric progressions, limits of sequences, and when an infinite sum has a finite value.
---

## Sequences

:::definizione{#successione titolo="Sequence"}
A **sequence** of real numbers is a function $a : \mathbb{N} \to \mathbb{R}$ that assigns to each natural number $n$ the number $a_n$, called the **term** at index $n$. The notation is $(a_n)$ or $a_1, a_2, a_3, \dots$. The index can start at $0$ or $1$, depending on the problem. Two ways to specify a sequence are as follows.

- by its **general term**, a formula that gives $a_n$ as a function of $n$, such as $a_n = \dfrac{2n + 1}{n + 3}$. Its first terms are $\dfrac{3}{4}$, $1$, $\dfrac{7}{6}$, and $\dfrac{9}{7}$.
- **recursively**, by giving the first term and a rule for obtaining each term from the preceding one. For example, $a_1 = 2$ and $a_{n+1} = 3\,a_n - 1$ give the first terms $2$, $5$, $14$, and $41$.

A recurrence gives each term in terms of the previous one. A formula for the general term gives any term directly, without computing all the preceding terms.
:::

:::definizione{#successione-monotona titolo="Monotonic and bounded sequences"}
A sequence is **strictly increasing** if $a_{n+1} > a_n$ for every $n$ and **strictly decreasing** if $a_{n+1} < a_n$ for every $n$. The corresponding non-strict inequalities define nondecreasing and nonincreasing sequences. All four are **monotone**. Monotonicity follows from the sign of $a_{n+1} - a_n$ or, for positive terms, from comparing the ratio $\dfrac{a_{n+1}}{a_n}$ with $1$. A sequence is **bounded** if there is a number $M$ such that $|a_n| \leq M$ for every $n$. For $a_n = \dfrac{2n + 1}{n + 3}$,
$$
a_{n+1} - a_n = \frac{2n + 3}{n + 4} - \frac{2n + 1}{n + 3} = \frac{5}{(n + 3)(n + 4)} > 0 ,
$$
so the sequence is increasing. Also, $0 < a_n < 2$ for every $n$ because $2n + 1 < 2n + 6$. The sequence is therefore bounded.
:::

## Arithmetic progressions

:::definizione{#progressione-aritmetica titolo="Arithmetic progression"}
In an **arithmetic progression**, each term is obtained by adding the same number $d$, called the **common difference**, to the preceding term. Thus $a_{n+1} = a_n + d$. Starting at $a_1$, one adds $d$ once to reach $a_2$, twice to reach $a_3$, and $n - 1$ times to reach $a_n$. This gives
$$
a_n = a_1 + (n - 1)\,d .
$$
The progression increases if $d > 0$ and decreases if $d < 0$. Plotted as a function of $n$, its terms lie on a line with slope $d$. For example, with $a_1 = 3$ and $d = 4$, the terms are $3$, $7$, $11$, $15$, $\dots$ and the general term is $a_n = 3 + 4\,(n - 1) = 4n - 1$.

::grafico{f="4*x-1" punti="1,3,pieno;2,7,pieno;3,11,pieno;4,15,pieno;5,19,pieno;6,23,pieno" xmin=-1 xmax=7 ymin=-3 ymax=27 nomi="n,aₙ" titolo="The terms of the arithmetic progression $a_n = 4n - 1$ lie on the line $y = 4x - 1$, whose slope equals the common difference $d = 4$"}

:::

::::teorema{#somma-aritmetica titolo="Sum of the terms of an arithmetic progression"}
The sum of the first $n$ terms of an arithmetic progression is
$$
S_n = a_1 + a_2 + \dots + a_n = \frac{n\,(a_1 + a_n)}{2} ,
$$
that is, the number of terms times the mean of the first and last terms. For example, the first $100$ natural numbers form an arithmetic progression with common difference $1$, with $a_1 = 1$ and $a_{100} = 100$, so
$$
S_{100} = 1 + 2 + \dots + 100 = \frac{100\,(1 + 100)}{2} = 5050 .
$$

:::dimostrazione
To find the sum, add the progression written forward to the same progression written in reverse order. The two rows are
$$
\begin{aligned}
S_n &= a_1 + a_2 + \dots + a_{n-1} + a_n , \\[4pt]
S_n &= a_n + a_{n-1} + \dots + a_2 + a_1 .
\end{aligned}
$$
In each column the sum is the same. From one column to the next, the top term increases by $d$ and the bottom term decreases by $d$, so each column sums to $a_1 + a_n$. Since there are $n$ columns, adding the two rows gives $2 S_n = n\,(a_1 + a_n)$. Dividing by $2$ yields the stated formula.
:::
::::

## Geometric progressions

:::definizione{#progressione-geometrica titolo="Geometric progression"}
In a **geometric progression**, each term is obtained by multiplying the preceding term by the same number $q \neq 0$, called the **common ratio**. Thus $a_{n+1} = q\,a_n$. Starting at $a_1$, one multiplies by $q$ once to reach $a_2$ and $n - 1$ times to reach $a_n$. This gives
$$
a_n = a_1\,q^{\,n - 1} .
$$
The ratio of two consecutive terms is always $q$; for $a_1 > 0$ the progression is increasing if $q > 1$ and decreasing if $0 < q < 1$, while for $q < 0$ the terms change sign at every step. For example, with $a_1 = 1$ and $q = 2$ one obtains $1$, $2$, $4$, $8$ and so on, while with $a_1 = 16$ and $q = \dfrac{1}{2}$ one obtains $16$, $8$, $4$, $2$ and so on. The successive values of an investment earning compound interest at rate $i$ form a geometric progression with common ratio $1 + i$, as shown in the chapter on compounding, annuities, and amortization.

::grafico{punti="1,1,pieno;2,2,pieno;3,4,pieno;4,8,pieno;5,16,pieno;6,32,pieno" xmin=-1 xmax=7 ymin=-4 ymax=36 nomi="n,aₙ" titolo="With $a_1 = 1$ and $q = 2 > 1$ each term is twice the previous one and the successive terms grow by increasingly large amounts"}

::grafico{punti="1,16,pieno;2,8,pieno;3,4,pieno;4,2,pieno;5,1,pieno;6,0.5,pieno" xmin=-1 xmax=7 ymin=-2 ymax=18 nomi="n,aₙ" titolo="With $a_1 = 16$ and $q = \dfrac{1}{2}$ each term is half the previous one and the progression decreases toward $0$"}

:::

::::teorema{#somma-geometrica titolo="Sum of the terms of a geometric progression"}
If $q \neq 1$, the sum of the first $n$ terms of a geometric progression is
$$
S_n = a_1 + a_1 q + \dots + a_1 q^{\,n-1} = a_1\,\frac{1 - q^{\,n}}{1 - q} .
$$
If $q = 1$ all the terms are equal to $a_1$ and $S_n = n\,a_1$. For example, the sum of the first ten powers of $2$ is the sum of $10$ terms with $a_1 = 1$ and $q = 2$, so
$$
1 + 2 + 4 + \dots + 2^{9} = \frac{1 - 2^{10}}{1 - 2} = 1023 .
$$

:::dimostrazione
The idea is to multiply the sum by $q$ and subtract, so that almost all the terms cancel. We have
$$
\begin{aligned}
S_n &= a_1 + a_1 q + a_1 q^2 + \dots + a_1 q^{\,n-1} , \\[4pt]
q\,S_n &= a_1 q + a_1 q^2 + \dots + a_1 q^{\,n-1} + a_1 q^{\,n} .
\end{aligned}
$$
In the difference $S_n - q\,S_n$ only the first term of the first row and the last term of the second remain, so $(1 - q)\,S_n = a_1\,(1 - q^{\,n})$. Since $q \neq 1$, dividing by $1 - q$ gives the stated formula.
:::
::::

## Limit of a sequence

:::definizione{#limite-successione titolo="Limit of a sequence"}
The sequence $(a_n)$ **converges** to the number $L$, written $\displaystyle\lim_{n \to +\infty} a_n = L$, if for every $\varepsilon > 0$ there exists an index $N$ such that
$$
n > N \implies |a_n - L| < \varepsilon .
$$
In other words, for any tolerance $\varepsilon$, however small, all terms from some index onward are at a distance from $L$ of less than $\varepsilon$. The sequence **diverges** to $+\infty$ if, for every $M$, there is an $N$ such that $a_n > M$ whenever $n > N$. Thus the terms eventually exceed any threshold. Divergence to $-\infty$ is defined analogously. Here a sequence with neither a finite nor an infinite limit is called **oscillatory**. An example is $(-1)^n$, which takes the values $-1$ and $1$ alternately. For $a_n = \dfrac{1}{n}$ and $L = 0$, the inequality $\dfrac{1}{n} < \varepsilon$ holds for $n > \dfrac{1}{\varepsilon}$. Thus $N \geq \dfrac{1}{\varepsilon}$ is enough, and $\dfrac{1}{n} \to 0$.

::grafico{punti="1,0.75,pieno;2,1,pieno;3,1.1667,pieno;4,1.2857,pieno;5,1.375,pieno;6,1.4444,pieno;7,1.5,pieno;8,1.5455,pieno;9,1.5833,pieno;10,1.6154,pieno;11,1.6429,pieno;12,1.6667,pieno;13,1.6875,pieno;14,1.7059,pieno;15,1.7222,pieno;16,1.7368,pieno;17,1.75,pieno;18,1.7619,pieno;19,1.7727,pieno" asintoti="y=2" xmin=-3 xmax=21 ymin=-0.2 ymax=2.2 nomi="n,aₙ" titolo="The terms of $a_n = \dfrac{2n + 1}{n + 3}$ increase and approach $2$ without reaching it"}

:::

:::teorema{#regole-limiti-successioni titolo="Limit laws"}
If $a_n \to A$ and $b_n \to B$, with $A$ and $B$ real numbers, then
$$
a_n + b_n \to A + B,
\qquad
a_n\,b_n \to A\,B,
\qquad
\frac{a_n}{b_n} \to \frac{A}{B} \quad (B \neq 0) .
$$
The same rules apply to infinite limits as long as the resulting expression is not one of the indeterminate forms $+\infty - \infty$, $0 \cdot \infty$, $\dfrac{\infty}{\infty}$, or $\dfrac{0}{0}$. Such forms must be resolved individually. The chapter on limits and continuity gives the proofs and explains indeterminate forms. For a quotient of polynomials in $n$, factor out the highest power of the index from both the numerator and the denominator, as in
$$
\frac{2n + 1}{n + 3} = \frac{n\left(2 + \dfrac{1}{n}\right)}{n\left(1 + \dfrac{3}{n}\right)} = \frac{2 + \dfrac{1}{n}}{1 + \dfrac{3}{n}} \to \frac{2}{1} = 2 ,
$$
since $\dfrac{1}{n}$ and $\dfrac{3}{n}$ tend to $0$.
:::

:::teorema{#successioni-monotone titolo="Monotone sequence theorem"}
A monotone sequence always has a limit, which can be finite or infinite. An increasing sequence converges if it is bounded and diverges to $+\infty$ if it is unbounded. A decreasing sequence converges if it is bounded and diverges to $-\infty$ if it is unbounded. The theorem follows from the completeness of the real numbers, discussed in the chapter on sets in Mathematical Analysis 1. It establishes existence even when we do not know how to compute the limit directly. For example, $a_n = \dfrac{2n + 1}{n + 3}$ is increasing and bounded, so it converges, and the limit laws give $2$ as its limit.
:::

::::teorema{#limite-potenza titolo="Limit of a geometric sequence"}
For the sequence $q^{\,n}$ we have
$$
\lim_{n \to +\infty} q^{\,n} =
\begin{cases}
+\infty & \text{if } q > 1 , \\[4pt]
1 & \text{if } q = 1 , \\[4pt]
0 & \text{if } -1 < q < 1 ,
\end{cases}
$$
and for $q \leq -1$ the sequence is oscillatory because its terms alternate in sign and their absolute values do not approach $0$. The value of $q$ therefore determines the limit of a geometric progression $a_1 q^{\,n-1}$. For example, $\left( \dfrac{3}{2} \right)^{n} \to +\infty$, whereas $\left( \dfrac{2}{3} \right)^{n} \to 0$.

::grafico{punti="1,-1,pieno;2,1,pieno;3,-1,pieno;4,1,pieno;5,-1,pieno;6,1,pieno;7,-1,pieno;8,1,pieno;9,-1,pieno;10,1,pieno" xmin=-2 xmax=12 ymin=-2 ymax=2 nomi="n,aₙ" titolo="For $q = -1$ the sequence $(-1)^n$ takes the values $-1$ and $1$ alternately, so it has no limit"}

:::dimostrazione
For $q > 1$ we write $q = 1 + h$ with $h > 0$. By Bernoulli's inequality, $(1 + h)^n \geq 1 + n h$ for every $n$, as follows by expanding the power and retaining the first two terms. The right-hand side exceeds any threshold as $n$ grows, so $q^{\,n}$ also diverges to $+\infty$. For $0 < |q| < 1$ the number $\dfrac{1}{|q|}$ is greater than $1$, so $\left( \dfrac{1}{|q|} \right)^{n} \to +\infty$ and its reciprocal $|q|^{\,n}$ tends to $0$; the equality $|q^{\,n}| = |q|^{\,n}$ then gives $q^{\,n} \to 0$. For $q = 0$ and $q = 1$ the sequence is constant.
:::
::::

## Numerical series

:::definizione{#serie titolo="Numerical series"}
Given a sequence $(a_k)$, the **series** $\displaystyle\sum_{k=1}^{\infty} a_k$ is the limit, if it exists, of the sequence of **partial sums**
$$
S_n = a_1 + a_2 + \dots + a_n = \sum_{k=1}^{n} a_k .
$$
The series **converges** with **sum** $S$ if $S_n \to S$ and $S$ is real. It **diverges** if $S_n \to +\infty$ or $S_n \to -\infty$ and is **oscillatory** if $(S_n)$ has neither a finite nor an infinite limit. An infinite sum of positive terms can be finite. For example, the series $\dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \dots$ has partial sums $S_n = 1 - \dfrac{1}{2^n}$. These tend to $1$, so the series converges with sum $1$.

::grafico{punti="1,0.5,pieno;2,0.75,pieno;3,0.875,pieno;4,0.9375,pieno;5,0.96875,pieno;6,0.984375,pieno;7,0.9921875,pieno;8,0.99609375,pieno;9,0.998046875,pieno;10,0.9990234375,pieno" asintoti="y=1" xmin=-2 xmax=12 ymin=-0.1 ymax=1.2 nomi="n,Sₙ" titolo="The partial sums of the series $\dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \dots$ are $1 - \dfrac{1}{2^n}$ and approach $1$"}

:::

::::teorema{#condizione-necessaria titolo="Necessary condition for convergence"}
If the series $\displaystyle\sum_{k=1}^{\infty} a_k$ converges, then $a_k \to 0$.

The condition is used mainly to rule out convergence. A series whose general term does not tend to $0$ cannot converge. For the series $\displaystyle\sum_{k=1}^{\infty} \frac{k}{k + 1}$, the general term tends to $1$, so the series does not converge. Since all the terms are positive, the partial sums increase and the series diverges to $+\infty$.

:::dimostrazione
Each term is the difference of two consecutive partial sums, $a_n = S_n - S_{n-1}$. If the series converges to $S$, both sequences of partial sums approach $S$, since $S_{n-1}$ is the same sequence shifted by one index. It follows that $a_n \to S - S = 0$.
:::
::::

:::attenzione
The condition $a_k \to 0$ is *necessary* for convergence, but it is *not sufficient*. The general term of the harmonic series $\displaystyle\sum_{k=1}^{\infty} \frac{1}{k}$ approaches $0$, yet the series diverges to $+\infty$. Grouping terms into blocks that end at powers of $2$ gives
$$
1 + \frac{1}{2} + \left( \frac{1}{3} + \frac{1}{4} \right) + \left( \frac{1}{5} + \dots + \frac{1}{8} \right) + \dots
\;\geq\;
1 + \frac{1}{2} + \frac{1}{2} + \frac{1}{2} + \dots ,
$$
because the block ending at $\dfrac{1}{2^{m}}$ contains $2^{m-1}$ terms, each at least $\dfrac{1}{2^{m}}$, so its sum is at least $2^{m-1} \cdot \dfrac{1}{2^{m}} = \dfrac{1}{2}$; for example $\dfrac{1}{3} + \dfrac{1}{4} \geq \dfrac{2}{4}$. The partial sums therefore exceed any threshold, even though they grow very slowly.

::grafico{punti="1,1.0000,pieno;2,1.5000,pieno;3,1.8333,pieno;4,2.0833,pieno;5,2.2833,pieno;6,2.4500,pieno;7,2.5929,pieno;8,2.7179,pieno;9,2.8290,pieno;10,2.9290,pieno;11,3.0199,pieno;12,3.1032,pieno;13,3.1801,pieno;14,3.2516,pieno;15,3.3182,pieno;16,3.3807,pieno;17,3.4396,pieno;18,3.4951,pieno;19,3.5477,pieno;20,3.5977,pieno;21,3.6454,pieno;22,3.6908,pieno;23,3.7343,pieno;24,3.7760,pieno;25,3.8160,pieno;26,3.8544,pieno;27,3.8915,pieno;28,3.9272,pieno;29,3.9617,pieno;30,3.9950,pieno" xmin=-4 xmax=32 ymin=-0.5 ymax=4.5 nomi="n,Sₙ" titolo="The partial sums of the harmonic series grow slowly, for example $S_{30} \approx 3{,}99$, but have no finite limit"}

:::

## Geometric series

::::teorema{#serie-geometrica titolo="Geometric series"}
The geometric series with first term $a \neq 0$ and common ratio $q$,
$$
\sum_{k=0}^{\infty} a\,q^{\,k} = a + a q + a q^2 + \dots ,
$$
converges if and only if $-1 < q < 1$, and in that case it has sum
$$
\sum_{k=0}^{\infty} a\,q^{\,k} = \frac{a}{1 - q} .
$$
For $q \geq 1$ it diverges (to $+\infty$ if $a > 0$, to $-\infty$ if $a < 0$), and for $q \leq -1$ it has neither a finite nor an infinite limit. The repeating decimal $0{,}\overline{3} = \dfrac{3}{10} + \dfrac{3}{100} + \dots$ is the series with $a = \dfrac{3}{10}$ and $q = \dfrac{1}{10}$, so it equals $\dfrac{3}{10} \cdot \dfrac{1}{1 - \frac{1}{10}} = \dfrac{3}{10} \cdot \dfrac{10}{9} = \dfrac{1}{3}$.

:::dimostrazione
For $q \neq 1$, the sum of the first $n$ terms is the sum of a geometric progression, $S_n = a\,\dfrac{1 - q^{\,n}}{1 - q}$. For $-1 < q < 1$ we have $q^{\,n} \to 0$ by the limit of the geometric sequence, so $S_n \to \dfrac{a}{1 - q}$. For $q > 1$ we have $q^{\,n} \to +\infty$ and $1 - q < 0$, so $S_n$ diverges with the sign of $a$; for $q = 1$ we have $S_n = n\,a$, which diverges in the same way. For $q \leq -1$ the sequence $q^{\,n}$ has neither a finite nor an infinite limit, and the same holds for $S_n$.
:::
::::

:::esempio{titolo="Value of a perpetuity"}
A perpetuity pays $500$ euros at the end of every year, indefinitely. At an annual interest rate of $5\%$, the payment due in $k$ years is worth $500 \cdot 1{,}05^{-k}$ today, since investing that amount now at $5\%$ compound interest yields $500$ euros in $k$ years. The present value of the perpetuity is the sum of these present values, a geometric series with first term $a = \dfrac{500}{1{,}05}$ and common ratio $q = \dfrac{1}{1{,}05} < 1$.
$$
\sum_{k=1}^{\infty} \frac{500}{1{,}05^{k}} = \frac{\dfrac{500}{1{,}05}}{1 - \dfrac{1}{1{,}05}} = \frac{500}{1{,}05 - 1} = \frac{500}{0{,}05} = 10\,000 \text{ euros} .
$$
In general, the present value of a perpetuity with a periodic payment of $R$ at interest rate $i$ is $\dfrac{R}{i}$. The chapter on compounding, annuities, and amortization covers annuities.
:::

## The number e

:::teorema{#numero-e titolo="The number e"}
The sequence $a_n = \left( 1 + \dfrac{1}{n} \right)^{n}$ is increasing and bounded, so it converges. Its limit is denoted by $e$.
$$
e = \lim_{n \to +\infty} \left( 1 + \frac{1}{n} \right)^{n} \approx 2{,}71828 .
$$
The first values are $a_1 = 2$, $a_2 = 2{,}25$, $a_{10} \approx 2{,}5937$, $a_{100} \approx 2{,}7048$, and $a_{1000} \approx 2{,}7169$. Expanding the power by the binomial theorem proves that the sequence is increasing and bounded. Those facts are assumed here. The number $e$ appears as compounding becomes more frequent. With a nominal annual rate of $12\%$ compounded monthly, the monthly rate is $1\%$ and an initial $1000$ euros grows to $1000 \cdot 1{,}01^{12} \approx 1126{,}83$ euros in one year. If the year is divided into $n$ compounding periods, the balance is $1000 \left( 1 + \dfrac{0{,}12}{n} \right)^{n}$. As $n$ increases, the balance tends to $1000\,e^{0{,}12} \approx 1127{,}50$ euros. This is continuous compounding, discussed again in the chapter on compounding, annuities, and amortization.

::grafico{punti="1,2.0000,pieno;2,2.2500,pieno;3,2.3704,pieno;4,2.4414,pieno;5,2.4883,pieno;6,2.5216,pieno;7,2.5465,pieno;8,2.5658,pieno;9,2.5812,pieno;10,2.5937,pieno;11,2.6042,pieno;12,2.6130,pieno;13,2.6206,pieno;14,2.6272,pieno;15,2.6329,pieno;16,2.6379,pieno;17,2.6424,pieno;18,2.6464,pieno;19,2.6500,pieno;20,2.6533,pieno" asintoti="y=2.71828" xmin=-3 xmax=22 ymin=-0.3 ymax=3.2 nomi="n,aₙ" titolo="The terms of $\left( 1 + \dfrac{1}{n} \right)^{n}$ increase starting from $2$ and approach $e \approx 2{,}718$"}

:::
