---
titolo: "Random variables and discrete distributions"
sommario: "From the probability mass function to choosing among the Bernoulli, binomial, geometric, Poisson, and hypergeometric distributions."
---

## Possible values and the probability mass function

:::definizione{#variabile-discreta titolo="Discrete random variable"}
Let $\Omega$ be the set of outcomes of an experiment. A **discrete random variable** $X$ assigns a number to each outcome and, with total probability $1$, takes values in a finite or countably infinite set. Its discrete **support** is the set $S_X$ of values with strictly positive probability. The event $\{X=x\}$ contains all outcomes to which $X$ assigns the value $x$.

If two coins are tossed, heads–tails and tails–heads are distinct outcomes. When $X$ counts heads, both outcomes belong to $\{X=1\}$. The variable records the count and allows outcomes with the same result to be treated together.
:::

:::definizione{#massa titolo="Probability mass function"}
The **probability mass function** of $X$ assigns to each real number $x$ the probability $p_X(x)=P(X=x)$. The masses are nonnegative and sum to $1$ over the support. For any set $A$ of values,
$$
P(X\in A)=\sum_{x\in S_X\cap A}p_X(x).
$$
The events $\{X=x\}$ associated with distinct values are disjoint. Thus the probability that $X$ belongs to $A$ is found by adding the mass of each value in $A$ exactly once.
:::

:::esempio{titolo="Normalizing a distribution"}
A count takes values $0$, $1$, and $3$ with masses $c$, $3c$, and $4c$, respectively. Since these are all the possible values, their masses sum to $1$. Hence
$$
c+3c+4c=1,\qquad c=\frac18.
$$
The constant is positive, so all the masses are admissible. The values $1$ and $3$ lie in $(0,3]$, so $P(0<X\le 3)=\dfrac38+\dfrac48=\dfrac78$. The open endpoint excludes the mass at $0$, whereas the closed endpoint includes the mass at $3$.

::grafico{xmin=-0.7 xmax=3.8 ymin=-0.09 ymax=0.66 nomi="x,p_X(x)" legenda=0 linee="0,0 0,0.125;1,0 1,0.375;3,0 3,0.5" punti="0,0.125,pieno;1,0.375,pieno;3,0.5,pieno" etichette="0.16,0.17,⅛;1.16,0.42,⅜;3.13,0.545,½" titolo="The masses at 1 and 3 contribute to the probability of the interval. The mass at 0 is excluded."}
:::

:::attenzione
Normalization alone does not establish that a table is a probability mass function. The numbers $-\dfrac14$, $\dfrac12$, and $\dfrac34$ sum to $1$, but the first is negative. If the masses depend on a parameter, its admissible values must also make every individual mass nonnegative.
:::

## The cumulative distribution function and its jumps

:::definizione{#ripartizione-discreta titolo="Cumulative distribution function"}
The **cumulative distribution function** of $X$ is $F_X(t)=P(X\le t)$, where $t$ is a real threshold. For every $a<b$,
$$
F_X(t)=\sum_{\substack{x\in S_X\\x\le t}}p_X(x),
\qquad P(a<X\le b)=F_X(b)-F_X(a).
$$
The difference removes all values up to and including $a$. The function is nondecreasing because as $t$ increases, it includes more values with nonnegative mass. Writing $F_X(t^-)$ for the left-hand limit gives $p_X(t)=F_X(t)-F_X(t^-)$. This difference measures the jump at the point and recovers the masses from the cumulative distribution function.
:::

:::esempio{titolo="Reading a cumulative distribution function"}
Let $X$ be the number of requests observed over a short interval, with masses $\dfrac14$, $\dfrac12$, and $\dfrac14$ at $0$, $1$, and $2$, respectively. The cumulative distribution function equals $0$ below $0$, $\dfrac14$ from $0$ inclusive to $1$ exclusive, $\dfrac34$ from $1$ inclusive to $2$ exclusive, and $1$ from $2$ onward. In particular, $F_X(1)=\dfrac34$ because the mass at $1$ is already included. By comparison, $F_X(1^-)=\dfrac14$. The jump between the two levels is $\dfrac12$, equal to $P(X=1)$.

::grafico{linee="-1,0 0,0;0,0.25 1,0.25;1,0.75 2,0.75;2,1 3.2,1" punti="0,0,vuoto;0,0.25,pieno;1,0.25,vuoto;1,0.75,pieno;2,0.75,vuoto;2,1,pieno" xmin=-1 xmax=3.2 ymin=-0.15 ymax=1.2 nomi="t,F_X(t)" etichette="-0.25,0.25,¼;0.7,0.75,¾" legenda=0 titolo="Cumulative distribution function with jumps at 0, 1, and 2"}

The probability $P(1<X\le 2)$ is $F_X(2)-F_X(1)=1-\dfrac34=\dfrac14$. Including the lower endpoint instead gives $P(1\le X\le 2)=F_X(2)-F_X(1^-)=\dfrac34$. The difference between the two answers is the mass at $1$.
:::

## Expected value, variance, and transformations

:::definizione{#momenti titolo="Moments of a discrete random variable"}
The **expected value** $E[X]$ is the mean of the values weighted by their probabilities. If $\sum_{x\in S_X}|x|p_X(x)<\infty$, then
$$
E[X]=\sum_{x\in S_X}x\,p_X(x).
$$
If $E[X^2]<\infty$, write $\mu=E[X]$ for the mean and define the **variance** by
$$
\operatorname{Var}(X)=E[(X-\mu)^2]=E[X^2]-\mu^2.
$$
The first expression is the mean of the squared deviations from $\mu$. The second follows by expanding the square and using $E[X]=\mu$. The square root of the variance is the standard deviation and has the same units as $X$.

For a function $g$, $E[g(X)]=\sum_{x\in S_X}g(x)p_X(x)$ whenever the sum converges absolutely. The second moment can therefore be calculated from the table for $X$ by replacing each value $x$ with $x^2$.
:::

:::esempio{titolo="Expected value of a prize"}
A prize $X$ is worth $0\,\mathrm{EUR}$ with probability $\dfrac12$, $4\,\mathrm{EUR}$ with probability $\dfrac14$, and $8\,\mathrm{EUR}$ with probability $\dfrac14$. Measuring the amounts in euros gives
$$
\begin{aligned}
E[X]&=0\cdot\frac12+4\cdot\frac14+8\cdot\frac14=3,\\[6pt]
E[X^2]&=0^2\cdot\frac12+4^2\cdot\frac14+8^2\cdot\frac14=20,\\[6pt]
\operatorname{Var}(X)&=20-3^2=11.
\end{aligned}
$$
The mean is $3\,\mathrm{EUR}$ even though the actual prize takes only the three stated amounts. The variance is $11\,\mathrm{EUR}^2$. With a ticket costing $3\,\mathrm{EUR}$, the expected net gain is zero, while the actual gain depends on the outcome.

::grafico{xmin=-0.8 xmax=9.3 ymin=-0.07 ymax=0.66 nomi="x,p_X(x)" legenda=0 linee="0,0 0,0.5;4,0 4,0.25;8,0 8,0.25" punti="0,0.5,pieno;4,0.25,pieno;8,0.25,pieno" segmenti="3,0,3,0.56" etichette="3,0.61,E[X] = 3;0.35,0.54,½;4.35,0.29,¼;8.35,0.29,¼" titolo="Probability masses of the prize amounts in euros. The mean $E[X]=3$ lies between the possible values $0$ and $4$ and is not a possible value of $X$."}
:::

::::teorema{#momenti-affini titolo="Moments of an affine transformation"}
Let $Y=a+bX$, where $a,b\in\mathbb R$. If $X$ has a finite mean, $E[Y]=a+bE[X]$. If its second moment is also finite, $\operatorname{Var}(Y)=b^2\operatorname{Var}(X)$.

:::dimostrazione
The formula for the mean follows from linearity of expectation. Consequently, the deviation of $Y$ from its mean is
$$
Y-E[Y]=a+bX-a-bE[X]=b(X-E[X]).
$$
Squaring and taking expectations gives the variance formula.
:::

Doubling all the prizes doubles their standard deviation. Adding the same amount to every prize shifts each prize by the same amount as the mean and leaves the spread unchanged.
::::

## Bernoulli trials and binomial counts

:::definizione{#bernoulli titolo="Indicators and the Bernoulli distribution"}
For an event $A$ with probability $p$, the indicator $I_A$ equals $1$ when $A$ occurs and $0$ otherwise. Then $I_A$ has the **Bernoulli** distribution with parameter $p$, where $0\le p\le 1$. Since $I_A^2=I_A$,
$$
E[I_A]=p,\qquad
\operatorname{Var}(I_A)=p-p^2=p(1-p).
$$
Indicators express a count as a sum. If $A_i$ is the event that unit $i$ passes an inspection, the number of units that pass is the sum of their indicators.
:::

::::teorema{#binomiale titolo="Binomial distribution"}
Perform $n\ge 1$ independent trials, each with the same success probability $p$. The number $X$ of successes has a **binomial** distribution $\operatorname{Bin}(n,p)$. For $0<p<1$,
$$
P(X=k)=\binom nk p^k(1-p)^{n-k},
\qquad k=0,\ldots,n.
$$
Its mean is $np$ and its variance is $np(1-p)$. If $p=0$ or $p=1$, the count is constant, equal to $0$ or $n$, respectively, and the mean and variance formulas still hold.

:::dimostrazione
Fix the $k$ positions of the successful trials. By independence, the sequence with successes in those positions and failures elsewhere has probability $p^k(1-p)^{n-k}$. There are $\binom nk$ disjoint choices of positions, so the mass is the number of choices times the probability of each. Writing $X$ as a sum of $n$ Bernoulli indicators, linearity of expectation gives $np$. The indicators are independent, so their variances add, giving $np(1-p)$.
:::
::::

:::esempio{titolo="From a threshold event to its complement"}
Roll four fair dice independently and count how often $6$ appears. Each trial succeeds with probability $\dfrac16$. The event that at least one $6$ appears is the complement of all trials failing, so
$$
P(X\ge 1)=1-P(X=0)=1-\left(\frac56\right)^4.
$$
To calculate $P(X\ge2)$, subtract the two masses $P(X=0)$ and $P(X=1)$ from $1$ instead. The threshold determines which counts belong to the complement. Numerically, $P(X=0)=\dfrac{625}{1296}$, so $P(X\ge1)=\dfrac{671}{1296}\approx0.518$.

::grafico{xmin=-0.7 xmax=4.8 ymin=-0.06 ymax=0.6 nomi="k,P(X = k)" legenda=0 linee="0,0 0,0.482253;1,0 1,0.385802;2,0 2,0.115741;3,0 3,0.015432;4,0 4,0.000772" punti="0,0.482253,pieno;1,0.385802,pieno;2,0.115741,pieno;3,0.015432,pieno;4,0.000772,pieno" segmenti="0.5,0,0.5,0.52" etichette="2.4,0.47,X ≥ 1" titolo="Probability masses of $\operatorname{Bin}\left(4,\dfrac16\right)$. Counts to the right of the line correspond to at least one $6$. Those to the left form the complement."}
:::

:::attenzione
A binomial distribution requires the same success probability in each trial. If two independent trials have probabilities $\dfrac14$ and $\dfrac34$, the probability of two successes is $\dfrac{3}{16}$. A $\operatorname{Bin}(2,\dfrac12)$ random variable would have the same mean, $1$, but probability $\dfrac14$ of two successes. The shared mean is therefore insufficient to identify the distribution.
:::

## Geometric waiting times and waiting for several successes

:::definizione{#geometrica titolo="Geometric distribution"}
Repeat independent trials with constant success probability $p$, where $0<p<1$. Let $T$ be the number of trials up to and including the first success. Setting $q=1-p$ gives
$$
P(T=k)=q^{k-1}p,\quad k=1,2,\ldots,
\qquad P(T>m)=q^m,\quad m=0,1,\ldots.
$$
The event $T=k$ requires $k-1$ failures followed by one success. The event $T>m$ instead requires all of the first $m$ trials to fail. The mean is $E[T]=\dfrac1p$ and the variance is $\operatorname{Var}(T)=\dfrac{1-p}{p^2}$. When $p=1$, $T=1$ with certainty, and the moment formulas still hold. The variable $T-1$ counts only the failures and starts at $0$.
:::

:::osservazione
For any positive integer-valued random variable $T$, a realization of $k$ contributes once to each of the events $T>0,\ldots,T>k-1$. Summing the tail probabilities therefore gives the expected value. For a geometric random variable with parameter $p$,
$$
E[T]=\sum_{m=0}^{\infty}P(T>m)=\sum_{m=0}^{\infty}q^m=\frac{1}{1-q}=\frac1p.
$$
The sum over values may be rearranged into a sum over thresholds because all terms are nonnegative. The same reasoning with $k(k-1)=2\sum_{m=0}^{k-1}m$ gives $E[T(T-1)]=2\sum_{m\ge0}m q^m=\dfrac{2q}{p^2}$. Adding $E[T]$ gives the second moment. Subtracting the square of the mean then gives the variance $\dfrac q{p^2}$.
:::

:::esempio{titolo="Point probability and tail probability"}
Let $p=\dfrac14$. The probability that the first success occurs on the fourth trial is $\left(\dfrac34\right)^3\dfrac14$. The probability that it occurs after the fourth trial is $\left(\dfrac34\right)^4$. The fourth trial succeeds in the first calculation and fails in the second. For a success by the fourth trial, the complement gives $1-\left(\dfrac34\right)^4$.

::grafico{xmin=-0.6 xmax=9.5 ymin=-0.035 ymax=0.31 nomi="k,P(T = k)" legenda=0 linee="1,0 1,0.25;2,0 2,0.1875;3,0 3,0.140625;4,0 4,0.105469;5,0 5,0.079102;6,0 6,0.059326;7,0 7,0.044495;8,0 8,0.033371" punti="1,0.25,pieno;2,0.1875,pieno;3,0.140625,pieno;4,0.105469,pieno;5,0.079102,pieno;6,0.059326,pieno;7,0.044495,pieno;8,0.033371,pieno" segmenti="4.5,0,4.5,0.27" etichette="2.5,0.29,T ≤ 4;6.7,0.29,T > 4" titolo="First eight masses of the geometric distribution with $p=\dfrac14$. The masses to the right of the line, continued indefinitely, sum to $\left(\dfrac34\right)^4$."}
:::

::::teorema{#geometrica-memoria titolo="Memorylessness"}
Let $T$ have a geometric distribution with $0<p<1$. For integers $m,k\ge 0$, $P(T>m+k\mid T>m)=P(T>k)$. Given that the first $m$ trials failed, the probability of waiting more than $k$ additional trials is the same as before the trials began.

:::dimostrazione
Because $\{T>m+k\}$ is contained in $\{T>m\}$ and $q^m>0$,
$$
P(T>m+k\mid T>m)
=\frac{P(T>m+k)}{P(T>m)}
=\frac{q^{m+k}}{q^m}=q^k.
$$
:::
::::

:::definizione{#binomiale-negativa titolo="Waiting for the rth success"}
Let $T_r$ count the trials up to and including the success that brings the total to $r$, with $r\ge1$ fixed. Under the same conditions as for the geometric distribution, $T_r$ has a **negative binomial** distribution. For $k\ge r$,
$$
P(T_r=k)=\binom{k-1}{r-1}p^r(1-p)^{k-r}.
$$
There must be exactly $r-1$ successes in the first $k-1$ trials, and the last trial must succeed. The total waiting time is the sum of the waiting times for successive successes, each with mean $\dfrac1p$, so $E[T_r]=\dfrac rp$. When $r=1$, this reduces to the geometric distribution.
:::

## The Poisson distribution

:::definizione{#poisson titolo="Poisson probability mass function"}
The **Poisson distribution** with parameter $\lambda>0$ assigns the following masses to counts $k=0,1,2,\ldots$:
$$
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!}.
$$
Since the series expansion of $e^\lambda$ is $\sum_{k\ge 0}\dfrac{\lambda^k}{k!}$, the masses sum to $1$. Also, $E[X]=\operatorname{Var}(X)=\lambda$. The parameter $\lambda$ is the mean number of events in the interval under consideration. For a homogeneous Poisson process with rate $r$ per unit time, the count over a duration $t$ has parameter $rt$, where $r$ and $t$ must use consistent units.
:::

:::esempio{titolo="Changing the observation period"}
A homogeneous Poisson process produces an average of $6$ arrivals per hour. In $20\,\mathrm{min}$, or $\dfrac13\,\mathrm{h}$, the parameter is $2$. If $X$ is the count in these twenty minutes,
$$
P(X\le 1)=P(X=0)+P(X=1)=e^{-2}+2e^{-2}=3e^{-2}.
$$
A count of at least two is the complementary event and has probability $1-3e^{-2}$. The hourly rate alone does not establish the distribution. This example explicitly assumes a homogeneous Poisson process.

::grafico{xmin=-0.7 xmax=5.8 ymin=-0.045 ymax=0.37 nomi="k,p_X(k)" legenda=0 linee="0,0 0,0.135335;1,0 1,0.270671;2,0 2,0.270671;3,0 3,0.180447;4,0 4,0.090224;5,0 5,0.036089" punti="0,0.135335,pieno;1,0.270671,pieno;2,0.270671,pieno;3,0.180447,pieno;4,0.090224,pieno;5,0.036089,pieno" segmenti="1.5,0,1.5,0.3" etichette="0.67,0.327,up to 1;3.5,0.327,2 or more" titolo="First six Poisson masses for parameter 2. The line separates the two masses in the sum from those in its complement."}
:::

:::osservazione
The probabilities of consecutive counts satisfy $P(X=k+1)=\dfrac{\lambda}{k+1}P(X=k)$. This follows from the ratio of their masses, since $(k+1)!=(k+1)k!$. If $\lambda=3$, then $P(X=2)=P(X=3)$ and both masses attain the maximum. The recurrence gives all the masses starting from $P(X=0)=e^{-\lambda}$.
:::

:::osservazione
If $X$ is binomial with many independent trials and a small success probability, a Poisson distribution with parameter $np$ can approximate its distribution. In particular, for fixed $\lambda>0$, as $n\to\infty$ with $p_n=\dfrac{\lambda}{n}$, the binomial mass at each fixed $k$ converges to the Poisson mass. The two factors governing the limit are
$$
\binom nk\left(\frac{\lambda}{n}\right)^k\longrightarrow\frac{\lambda^k}{k!},
\qquad
\left(1-\frac{\lambda}{n}\right)^{n-k}\longrightarrow e^{-\lambda}.
$$
For $n=100$ and $p=0.02$, the exact probability of zero successes is $0.98^{100}$, whereas the approximation is $e^{-2}$. The binomial distribution assigns zero mass to counts above $100$. This upper limit on its support distinguishes the distributions even when their masses for small counts are close.

::grafico{xmin=-0.7 xmax=5.8 ymin=-0.035 ymax=0.33 nomi="k,massa" legenda=0 linee="-0.1,0 -0.1,0.13262;0.9,0 0.9,0.270652;1.9,0 1.9,0.273414;2.9,0 2.9,0.182276;3.9,0 3.9,0.090208;4.9,0 4.9,0.035347" punti="-0.1,0.13262,pieno;0.9,0.270652,pieno;1.9,0.273414,pieno;2.9,0.182276,pieno;3.9,0.090208,pieno;4.9,0.035347,pieno;0.1,0.135335,vuoto;1.1,0.270671,vuoto;2.1,0.270671,vuoto;3.1,0.180447,vuoto;4.1,0.090224,vuoto;5.1,0.036089,vuoto" segmenti="0.1,0,0.1,0.135335;1.1,0,1.1,0.270671;2.1,0,2.1,0.270671;3.1,0,3.1,0.180447;4.1,0,4.1,0.090224;5.1,0,5.1,0.036089" titolo="Masses of $\operatorname{Bin}(100;\,0.02)$ (solid) and of the Poisson distribution with $\lambda=2$ (dashed), for $k$ from $0$ through $5$. The differences are smaller than $0.003$."}
:::

::::teorema{#momenti-poisson titolo="Deriving the Poisson moments"}
Let $X$ have a Poisson distribution with parameter $\lambda>0$. Its first moment is $\lambda$, and the expected value of the product $X(X-1)$ is $\lambda^2$. This product counts the ordered pairs of distinct events in one observation and simplifies the calculation of the second moment.

:::dimostrazione
In calculating $E[X]$, the term for $k=0$ is zero. For $k\ge1$ the factor $k$ cancels against the factorial, and the index can be shifted by setting $j=k-1$. This gives
$$
E[X]=e^{-\lambda}\sum_{k=1}^{\infty}\frac{k\lambda^k}{k!}
=\lambda e^{-\lambda}\sum_{j=0}^{\infty}\frac{\lambda^j}{j!}
=\lambda.
$$
In calculating $E[X(X-1)]$, the terms for $k=0$ and $k=1$ are zero. For $k\ge2$ the two factors $k$ and $k-1$ leave $(k-2)!$ in the denominator. The same series multiplied by $\lambda^2 e^{-\lambda}$ therefore gives $\lambda^2$. Since $X^2=X(X-1)+X$, it follows that $E[X^2]=\lambda^2+\lambda$ and $\operatorname{Var}(X)=\lambda$.
:::

For a Poisson count with mean $4$, the variance is therefore $4$ and the standard deviation is $2$. The standard deviation expresses the spread on the original count scale.
::::

## Sampling without replacement

:::definizione{#ipergeometrica titolo="Hypergeometric distribution"}
A population of $N\ge1$ units contains $R$ units of interest, with $0\le R\le N$. If a subset of $n$ units is selected uniformly, with $1\le n\le N$, the count $X$ of units of interest has a **hypergeometric** distribution. For
$$
\max(0,n-(N-R))\le k\le\min(n,R)
$$
its probability mass function is
$$
P(X=k)=\frac{\binom Rk\binom{N-R}{n-k}}{\binom Nn}.
$$
Choose $k$ units of interest from the $R$ available and $n-k$ units from the other $N-R$. The denominator counts all equally likely samples. The endpoints of the support reflect how many units are available in each group.
:::

:::esempio{titolo="Support bounds and exact probability"}
A batch contains $7$ nondefective items and $3$ defective ones. Draw $8$ items uniformly without replacement. Since only $7$ nondefective items are available, at least one item drawn must be defective. Since there are only $3$ defective items, the support of $X$ is $\{1,2,3\}$. The probability of drawing exactly one defective item is
$$
P(X=1)=\frac{\binom31\binom77}{\binom{10}8}
=\frac{3}{45}=\frac1{15}.
$$
This event requires all seven nondefective items, so the three favorable samples differ only in which defective item was drawn. The same counting argument gives $P(X=2)=P(X=3)=\dfrac{21}{45}=\dfrac7{15}$ because $\binom32\binom76=\binom33\binom75=21$.

::grafico{xmin=-0.6 xmax=4.3 ymin=-0.06 ymax=0.6 nomi="k,P(X = k)" legenda=0 linee="1,0 1,0.066667;2,0 2,0.466667;3,0 3,0.466667" punti="1,0.066667,pieno;2,0.466667,pieno;3,0.466667,pieno" etichette="1.3,0.11,1⁄15;2.3,0.51,7⁄15;3.3,0.51,7⁄15" titolo="Number of defective items among $8$ drawn from $7$ nondefective and $3$ defective items. The value $0$ has zero mass because there are only $7$ nondefective items."}
:::

:::osservazione
Setting $p=\dfrac RN$ gives $E[X]=np$. Indeed, each of the $n$ positions in a uniformly ordered draw has probability $p$ of containing a unit of interest. Linearity of expectation gives the formula even though the indicators are dependent. For $N>1$,
$$
\operatorname{Var}(X)=np(1-p)\frac{N-n}{N-1}.
$$
The factor $\dfrac{N-n}{N-1}$ is the finite population correction. If $n=N$, the count is always $R$ and its variance is zero. With replacement and independent draws, the count instead has a binomial distribution and its variance is $np(1-p)$.
:::

::::teorema{#dipendenza-campionamento titolo="Dependence when sampling a finite population"}
Let $X$ be the number of units of interest in a uniform sample drawn without replacement, with $N>1$. Let $I_i$ be the indicator that position $i$ contains a unit of interest. For two distinct positions, the probability that both indicators equal $1$ is
$$
E[I_i I_j]=\frac{R(R-1)}{N(N-1)}.
$$
Since each indicator has mean $p=\dfrac RN$, the difference between this joint probability and $p^2$ is $-\dfrac{p(1-p)}{N-1}$.

:::dimostrazione
By symmetry of the positions, it suffices to consider the first two draws. The first belongs to the group of interest with probability $\dfrac RN$. If it belongs to that group and $R>0$, the probability that the second belongs to it is $\dfrac{R-1}{N-1}$, since both the number of units of interest and the total number of units have fallen by one. Multiplying the probabilities gives the formula, which also holds for $R=0$ because both indicators are then always zero.

Expanding the square of the sum of the deviations $I_i-p$ gives $n$ individual squared terms and $n(n-1)$ products for distinct positions, counting the positions in order. The expectation of the first group of terms is $np(1-p)$. That of the second group is $-\dfrac{n(n-1)p(1-p)}{N-1}$. Adding the two gives the hypergeometric variance.
:::

When $0<R<N$, the dependence is negative. After drawing a unit of interest, the probability of drawing another falls. After drawing from the other group, it rises. These changes preserve the same marginal probability at every position but make extreme counts less likely than with independent draws having the same $p$, when the extremes $0$ and $n$ can be compared. If one category has too few units for an extreme count, that count is impossible without replacement.
::::

## Sums of counts and choosing a distribution

::::teorema{#somme titolo="Sums of independent counts"}
If $X$ and $Y$ are independent binomial random variables with the same success probability $p$ and trial counts $n$ and $m$, their sum has distribution $\operatorname{Bin}(n+m,p)$. If they have independent Poisson distributions with parameters $\lambda$ and $\mu$, their sum has distribution $\operatorname{Pois}(\lambda+\mu)$.

:::dimostrazione
For the first assertion, the joint distribution of $X$ and $Y$ can be represented by two disjoint groups of trials, all independent, with the same $p$. Their sum is the success count over the $n+m$ trials. For the second assertion, sum over the cases $X=j$ and $Y=k-j$. By independence,
$$
\begin{aligned}
P(X+Y=k)
&=e^{-(\lambda+\mu)}\sum_{j=0}^k\frac{\lambda^j\mu^{k-j}}{j!(k-j)!}\\[6pt]
&=\frac{e^{-(\lambda+\mu)}}{k!}
\sum_{j=0}^k\binom kj\lambda^j\mu^{k-j}\\[6pt]
&=e^{-(\lambda+\mu)}\frac{(\lambda+\mu)^k}{k!}.
\end{aligned}
$$
The last equality is the binomial theorem.
:::

If two independent streams produce an average of two and three events in the same hour, respectively, and their counts are Poisson, the hourly total is Poisson with parameter $5$. The probability of an hour without events is therefore $e^{-5}$.
::::

:::osservazione
Linearity, $E[X+Y]=E[X]+E[Y]$, holds for random variables with finite expectations even in the presence of dependence. For independent random variables with finite variances, $\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$ also holds. With dependence, the variance calculation generally includes the term $2\operatorname{Cov}(X,Y)$, discussed in the chapter on joint distributions.
:::

:::esempio{titolo="Four questions about the same inspection"}
An inspector tests devices and calls a pass a success. The number passing among $10$ independent inspections with constant success probability has a binomial distribution. Under the same conditions, the number of inspections up to the first pass has a geometric distribution. If the inspector selects $10$ devices uniformly at random without replacement from a batch with a known number of nondefective devices, the number of nondefective devices selected has a hypergeometric distribution. If the inspector instead records alerts in an hour and their arrivals follow a homogeneous Poisson process, the count has a Poisson distribution. Each variable is a count. Its support and the procedure used to collect the data determine its distribution.
:::
