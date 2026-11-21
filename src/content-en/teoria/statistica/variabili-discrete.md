---
titolo: "Random variables and discrete distributions"
sommario: "From the probability mass function to choosing among the Bernoulli, binomial, geometric, Poisson, and hypergeometric distributions."
---

Chapters 3 and 4 computed probabilities of events, such as "the item is defective". In many problems, however, the quantity of interest is a number that depends on the outcome, such as the number of defective items in a sample or the number of calls that reach a switchboard in an hour. A number of this kind is called a random variable. This chapter deals with random variables that take isolated values, such as the counts $0,1,2,\ldots$, and for each one it computes the probability of every value, the mean value, and the spread around that value.

For example, each item produced by a machine is defective with probability $0.02$, independently of the others, and an inspection examines 100 items. The probability of finding more than 4 defective items follows from the binomial distribution and is about $0.05$; the mean number of defective items is $100\cdot0.02=2$.

The expected value and the variance are the mean and the variance of the data in Chapter 2, with probabilities in place of relative frequencies. Chapter 6 deals with random variables that take every value in an interval, such as a duration; Chapter 7 computes probabilities that involve two or more random variables together and proves the rules for sums stated here. The binomial distribution returns in Chapter 8, because the proportion of successes in a sample is a binomial count divided by the sample size, and from there it enters the estimates and tests of Chapters 9-11.

## Possible values and the probability mass function

:::definizione{#variabile-discreta titolo="Discrete random variable"}
Two coins are tossed. The four outcomes heads–heads, heads–tails, tails–heads, and tails–tails each have probability $\dfrac14$, and counting heads assigns a number to each outcome: $2$, $1$, $1$, and $0$.

Let $\Omega$ be the sample space of an experiment, that is, the set of its outcomes (Chapter 3). A **random variable** $X$ is a rule that assigns a real number to each outcome in $\Omega$. The random variable is **discrete** when the values it takes with positive probability form a finite or countable set and their probabilities sum to $1$. A countable set is an infinite set whose elements can be listed one after another, like the natural numbers $0,1,2,\ldots$ (Chapter 1).

The discrete **support** is the set $S_X$ of values with strictly positive probability. For the number of heads, $S_X=\{0,1,2\}$.

For a number $x$, $\{X=x\}$ denotes the event made up of all outcomes to which $X$ assigns the value $x$. In the example, $\{X=1\}$ contains heads–tails and tails–heads, so $P(X=1)=\dfrac14+\dfrac14=\dfrac12$.
:::

:::definizione{#massa titolo="Probability mass function"}
For the number $X$ of heads in two tosses, $P(X=0)=\dfrac14$, $P(X=1)=\dfrac12$, and $P(X=2)=\dfrac14$. Every other probability about $X$ follows from these three; for example, the probability of at least one head is $P(X=1)+P(X=2)=\dfrac34$.

The **probability mass function** of $X$ assigns to each real number $x$ the probability $p_X(x)=P(X=x)$. The values $p_X(x)$ are called masses. Outside the support the mass is zero; in the example, $p_X(1.5)=0$. The masses are nonnegative and sum to $1$ over the support.

For a set $A$ of values, the probability that $X$ falls in $A$ is the sum of the masses of the values in $A$:
$$
P(X\in A)=\sum_{x\in S_X\cap A}p_X(x).
$$
The formula holds because the events $\{X=x\}$ for distinct values are disjoint, so their probabilities add.

The way the total probability $1$ is shared among the values of $X$ is called the **distribution** of $X$; for a discrete random variable the distribution is given by the probability mass function. The most common distributions have names, and the notation $X\sim\ldots$, read "$X$ has distribution…", states the distribution of $X$.
:::

:::esempio{titolo="Normalizing a distribution"}
The number $X$ of faults reported by a counter takes the values $0$, $1$, and $3$ with masses $c$, $3c$, and $4c$, respectively. Since these are all the possible values, the three masses sum to $1$. Hence
$$
c+3c+4c=1,\qquad c=\frac18.
$$
The constant is positive, so all the masses are nonnegative and the table is a probability mass function. The values $1$ and $3$ lie in $(0,3]$, so $P(0<X\le 3)=\dfrac38+\dfrac48=\dfrac78$. The open endpoint excludes the mass at $0$, whereas the closed endpoint includes the mass at $3$.

::grafico{xmin=-0.7 xmax=3.8 ymin=-0.09 ymax=0.66 nomi="x,p_X(x)" legenda=0 linee="0,0 0,0.125;1,0 1,0.375;3,0 3,0.5" punti="0,0.125,pieno;1,0.375,pieno;3,0.5,pieno" etichette="0.16,0.17,⅛;1.16,0.42,⅜;3.13,0.545,½" titolo="The masses at 1 and 3 contribute to the probability of the interval. The mass at 0 is excluded."}
:::

:::attenzione
A table of numbers that sum to $1$ is a probability mass function only if every number is nonnegative. The numbers $-\dfrac14$, $\dfrac12$, and $\dfrac34$ sum to $1$, but the first is negative and therefore not a probability.

If the masses depend on a parameter, the sign of each individual mass must also be checked. The masses $\dfrac{1+c}{2}$ and $\dfrac{1-c}{2}$ sum to $1$ for every $c$, but both are nonnegative only for $-1\le c\le1$.
:::

## The cumulative distribution function and its jumps

:::definizione{#ripartizione-discreta titolo="Cumulative distribution function"}
For the number $X$ of heads in two tosses, the probability of at most one head is $P(X\le1)=\dfrac14+\dfrac12=\dfrac34$. Also $P(X\le1.5)=\dfrac34$, because there are no possible values between $1$ and $1.5$.

The **cumulative distribution function** of $X$ is $F_X(t)=P(X\le t)$, where $t$ is any real threshold. It is obtained by adding the masses of the values that do not exceed the threshold. Moreover, for every $a<b$, the event $\{X\le b\}$ is the union of the two disjoint events $\{X\le a\}$ and $\{a<X\le b\}$, so the probability of an interval is the difference of two values of the cumulative distribution function:
$$
F_X(t)=\sum_{\substack{x\in S_X\\x\le t}}p_X(x),
\qquad P(a<X\le b)=F_X(b)-F_X(a).
$$

The function is nondecreasing because, as $t$ increases, values with nonnegative mass are added. The value the function takes just before $t$, that is, its left-hand limit, is written $F_X(t^-)$ and equals the probability $P(X<t)$ of the values strictly less than $t$. Then
$$
p_X(t)=F_X(t)-F_X(t^-),
$$
that is, the mass at $t$ is the height of the jump of the cumulative distribution function at $t$. All the masses can therefore be recovered from the cumulative distribution function; indeed, tables of the most common distributions list the values of $F_X$.
:::

:::esempio{titolo="Reading a cumulative distribution function"}
Let $X$ be the number of requests observed over a short interval, with masses $\dfrac14$, $\dfrac12$, and $\dfrac14$ at $0$, $1$, and $2$, respectively. The cumulative distribution function equals $0$ below $0$, $\dfrac14$ from $0$ inclusive to $1$ exclusive, $\dfrac34$ from $1$ inclusive to $2$ exclusive, and $1$ from $2$ onward. In particular, $F_X(1)=\dfrac34$ because the mass at $1$ is already included. By comparison, $F_X(1^-)=\dfrac14$. The jump between the two levels is $\dfrac34-\dfrac14=\dfrac12$, equal to $P(X=1)$.

::grafico{linee="-1,0 0,0;0,0.25 1,0.25;1,0.75 2,0.75;2,1 3.2,1" punti="0,0,vuoto;0,0.25,pieno;1,0.25,vuoto;1,0.75,pieno;2,0.75,vuoto;2,1,pieno" xmin=-1 xmax=3.2 ymin=-0.15 ymax=1.2 nomi="t,F_X(t)" etichette="-0.25,0.25,¼;0.7,0.75,¾" legenda=0 titolo="Cumulative distribution function with jumps at 0, 1, and 2"}

The probability $P(1<X\le 2)$ is $F_X(2)-F_X(1)=1-\dfrac34=\dfrac14$. Including the lower endpoint instead gives $P(1\le X\le 2)=F_X(2)-F_X(1^-)=1-\dfrac14=\dfrac34$. The difference between the two answers is the mass at $1$.
:::

## Expected value, variance, and transformations

:::definizione{#momenti titolo="Moments of a discrete random variable"}
For the number $X$ of heads in two tosses, the mean of the values $0$, $1$, $2$ weighted by their probabilities is
$$
0\cdot\frac14+1\cdot\frac12+2\cdot\frac14=1.
$$
This is the weighted mean of Chapter 2, with probabilities in place of relative frequencies.

The **expected value** $E[X]$, also called the mean of $X$, is this weighted mean:
$$
E[X]=\sum_{x\in S_X}x\,p_X(x).
$$
When the support is infinite the sum is a series, and the expected value is defined only if the series converges absolutely, that is, if $\sum_{x\in S_X}|x|p_X(x)<\infty$. If $X$ takes no negative values and the series diverges, one sets $E[X]=+\infty$.

For a function $g$, the expected value of $g(X)$ is computed from the table for $X$ by replacing each value $x$ with $g(x)$:
$$
E[g(X)]=\sum_{x\in S_X}g(x)\,p_X(x),
$$
whenever the sum converges absolutely. With $g(x)=x^2$ this gives $E[X^2]$; for the two coins, $E[X^2]=0^2\cdot\dfrac14+1^2\cdot\dfrac12+2^2\cdot\dfrac14=\dfrac32$, which differs from $(E[X])^2=1$. The number $E[X^k]$ is called the moment of order $k$; $E[X]$ is the first moment and $E[X^2]$ the second.

With $g(x)=a+bx$ the previous formula gives $E[a+bX]=a\sum_{x}p_X(x)+b\sum_{x}x\,p_X(x)=a+bE[X]$, because the masses sum to $1$. Moreover, for two random variables $X$ and $Y$ with finite expected values,
$$
E[X+Y]=E[X]+E[Y],
$$
even when $X$ and $Y$ depend on each other; the result is proved in Chapter 7. For the sum of the results of two dice, for example, $E[X+Y]=3.5+3.5=7$, because each die has mean $\dfrac{1+2+\cdots+6}{6}=3.5$. This property is called **linearity** of expectation.

Let $\mu=E[X]$; the Greek letter $\mu$ is read mu. The deviations of $X$ from its mean are $X-\mu$. If $E[X^2]<\infty$, the **variance** of $X$ is the mean of the squared deviations:
$$
\operatorname{Var}(X)=E[(X-\mu)^2]=E[X^2]-\mu^2.
$$
The second expression follows by expanding the square, $(X-\mu)^2=X^2-2\mu X+\mu^2$, and applying linearity: $E[X^2]-2\mu E[X]+\mu^2=E[X^2]-\mu^2$. For the two coins the deviations are $-1$, $0$, $1$, so $\operatorname{Var}(X)=1\cdot\dfrac14+0\cdot\dfrac12+1\cdot\dfrac14=\dfrac12$, and the second formula gives $\dfrac32-1=\dfrac12$. The square root of the variance is called the standard deviation and has the same units as $X$; it indicates how far the values of $X$ typically lie from the mean.

Two random variables $X$ and $Y$ are independent when, for every pair of values $x$ and $y$, the events $\{X=x\}$ and $\{Y=y\}$ are independent in the sense of Chapter 4, that is, $P(X=x,\,Y=y)=P(X=x)\,P(Y=y)$, where the comma means that both events occur. The results of two separate dice are independent. Several random variables $X_1,\ldots,X_n$ are independent when, for every choice of values $x_1,\ldots,x_n$, the events $\{X_1=x_1\},\ldots,\{X_n=x_n\}$ are mutually independent (Chapter 4). For independent random variables with finite variances, the variance of the sum is the sum of the variances, $\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$; this too is proved in Chapter 7.
:::

:::esempio{titolo="Expected value of a prize"}
A prize $X$ is worth $0\,\mathrm{EUR}$ with probability $\dfrac12$, $4\,\mathrm{EUR}$ with probability $\dfrac14$, and $8\,\mathrm{EUR}$ with probability $\dfrac14$. In euros one gets
$$
\begin{aligned}
E[X]&=0\cdot\frac12+4\cdot\frac14+8\cdot\frac14=3,\\[6pt]
E[X^2]&=0^2\cdot\frac12+4^2\cdot\frac14+8^2\cdot\frac14=20,\\[6pt]
\operatorname{Var}(X)&=20-3^2=11.
\end{aligned}
$$
The mean is $3\,\mathrm{EUR}$ even though the actual prize takes only the three stated amounts. The variance is $11\,\mathrm{EUR}^2$ and the standard deviation is $\sqrt{11}\approx3.32\,\mathrm{EUR}$. With a ticket costing $3\,\mathrm{EUR}$ the net gain is $X-3$, and by linearity the expected net gain is $E[X]-3=0$. The gain from a single play, instead, is $-3$, $1$, or $5\,\mathrm{EUR}$, depending on the outcome.

::grafico{xmin=-0.8 xmax=9.3 ymin=-0.07 ymax=0.66 nomi="x,p_X(x)" legenda=0 linee="0,0 0,0.5;4,0 4,0.25;8,0 8,0.25" punti="0,0.5,pieno;4,0.25,pieno;8,0.25,pieno" segmenti="3,0,3,0.56" etichette="3,0.61,E[X] = 3;0.35,0.54,½;4.35,0.29,¼;8.35,0.29,¼" titolo="Probability masses of the prize amounts in euros. The mean $E[X]=3$ lies between the possible values $0$ and $4$ and is not a possible value of $X$."}
:::

::::teorema{#momenti-affini titolo="Moments of an affine transformation"}
If the prizes in the previous example are doubled and $1\,\mathrm{EUR}$ is added, the new prize $Y=1+2X$ is worth $1$, $9$, and $17\,\mathrm{EUR}$ with probabilities $\dfrac12$, $\dfrac14$, and $\dfrac14$. Direct calculation gives $E[Y]=7=1+2\cdot3$ and $E[Y^2]=93$, so $\operatorname{Var}(Y)=93-49=44=2^2\cdot11$. The added constant does not change the variance, while the factor $2$ multiplies it by $4$.

In general, let $Y=a+bX$, where $a,b\in\mathbb R$. If $X$ has a finite mean, $E[Y]=a+bE[X]$. If its second moment is also finite, $\operatorname{Var}(Y)=b^2\operatorname{Var}(X)$.

:::dimostrazione
The formula for the mean is linearity of expectation. Consequently, the deviation of $Y$ from its mean is
$$
Y-E[Y]=a+bX-a-bE[X]=b(X-E[X]).
$$
Squaring gives $(Y-E[Y])^2=b^2(X-E[X])^2$. Taking expected values and moving the constant $b^2$ outside by linearity gives $\operatorname{Var}(Y)=b^2\operatorname{Var}(X)$.
:::

Doubling the prizes therefore doubles the standard deviation, which is the square root of the variance. With $a=0$ and $b=-1$ one gets $\operatorname{Var}(-X)=\operatorname{Var}(X)$. Therefore, if $X$ and $Y$ are independent, so are $X$ and $-Y$, and $\operatorname{Var}(X-Y)=\operatorname{Var}(X)+\operatorname{Var}(-Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$; with variances $1$ and $4$, the difference has variance $5$.
::::

## Bernoulli trials and binomial counts

:::definizione{#bernoulli titolo="Indicators and the Bernoulli distribution"}
When a die is rolled, the random variable that equals $1$ if a $6$ comes up and $0$ otherwise takes the value $1$ with probability $\dfrac16$ and the value $0$ with probability $\dfrac56$.

For an event $A$ with probability $p$, the **indicator** $I_A$ is the random variable that equals $1$ when $A$ occurs and $0$ otherwise; it is the same indicator used to count data in Chapter 1. Then $I_A$ has the **Bernoulli** distribution with parameter $p$, where $0\le p\le 1$, written $I_A\sim\operatorname{Bernoulli}(p)$. Its expected value is $E[I_A]=1\cdot p+0\cdot(1-p)=p$. Since $0^2=0$ and $1^2=1$, we have $I_A^2=I_A$, so $E[I_A^2]=p$ and
$$
E[I_A]=p,\qquad
\operatorname{Var}(I_A)=p-p^2=p(1-p).
$$
For the $6$ on the die, $E[I_A]=\dfrac16$ and $\operatorname{Var}(I_A)=\dfrac5{36}$.

Indicators express a count as a sum. If $A_i$ is the event that unit $i$ passes an inspection, the number of units that pass is $I_{A_1}+\cdots+I_{A_n}$: with three units and results pass, fail, pass, the sum is $1+0+1=2$. By linearity, the expected number of units that pass is $P(A_1)+\cdots+P(A_n)$; this calculation gives the mean of the binomial and hypergeometric distributions.
:::

::::teorema{#binomiale titolo="Binomial distribution"}
A die is rolled three times and the number of $6$s is counted. Exactly one $6$ arises from three sequences, depending on whether the $6$ comes on the first, second, or third roll. By independence of the rolls, each sequence has probability $\dfrac16\left(\dfrac56\right)^2=\dfrac{25}{216}$, so the probability of exactly one $6$ is $3\cdot\dfrac{25}{216}=\dfrac{25}{72}$.

Each repetition of the experiment is called a trial, and the outcome being counted (here the $6$) is called a success. In general, perform $n\ge 1$ independent trials, that is, trials whose results are mutually independent in the sense of Chapter 4, each with the same success probability $p$. The number $X$ of successes has the **binomial** distribution with parameters $n$ and $p$, written $X\sim\operatorname{Bin}(n,p)$. For $0<p<1$,
$$
P(X=k)=\binom nk p^k(1-p)^{n-k},
\qquad k=0,\ldots,n,
$$
where $\binom nk$ is the binomial coefficient of Chapter 3, that is, the number of ways to choose $k$ objects out of $n$. Its mean is $np$ and its variance is $np(1-p)$. If $p=0$ or $p=1$, the count is constant, equal to $0$ or $n$, respectively, and the mean and variance formulas still hold. For the three rolls of the die the mean is $3\cdot\dfrac16=\dfrac12$.

:::dimostrazione
Fix the $k$ positions of the successful trials. By independence, the sequence with successes in those positions and failures elsewhere has probability $p^k(1-p)^{n-k}$. There are $\binom nk$ choices of positions, and they give different sequences, that is, disjoint events, so the mass is the number of choices times the probability of each.

Let $I_i$ be the indicator of success in trial $i$, for $i=1,\ldots,n$. Then $X=I_1+\cdots+I_n$, and each $I_i$ is Bernoulli with parameter $p$. By linearity of expectation, $E[X]=p+\cdots+p=np$. The indicators are independent because the trials are; for independent random variables the variance of the sum is the sum of the variances, so $\operatorname{Var}(X)=n\,p(1-p)$.
:::

In Chapter 8 the proportion of successes $\dfrac Xn$ will be used to estimate $p$ when it is unknown.
::::

:::esempio{titolo="From a threshold event to its complement"}
Four fair dice are rolled independently, and $X$ is the number of $6$s. Each trial succeeds with probability $\dfrac16$, so $X\sim\operatorname{Bin}\left(4,\dfrac16\right)$. The event that at least one $6$ appears is the complement of all trials failing, so
$$
P(X\ge 1)=1-P(X=0)=1-\left(\frac56\right)^4.
$$
Numerically, $P(X=0)=\dfrac{625}{1296}$, so $P(X\ge1)=\dfrac{671}{1296}\approx0.518$.

For the event $X\ge2$ the complement is $X\le1$, which contains the two values $0$ and $1$. The two masses $P(X=0)$ and $P(X=1)=4\cdot\dfrac16\left(\dfrac56\right)^3=\dfrac{500}{1296}$ are therefore subtracted from $1$, giving $P(X\ge2)=\dfrac{171}{1296}\approx0.132$.

::grafico{xmin=-0.7 xmax=4.8 ymin=-0.06 ymax=0.6 nomi="k,P(X = k)" legenda=0 linee="0,0 0,0.482253;1,0 1,0.385802;2,0 2,0.115741;3,0 3,0.015432;4,0 4,0.000772" punti="0,0.482253,pieno;1,0.385802,pieno;2,0.115741,pieno;3,0.015432,pieno;4,0.000772,pieno" segmenti="0.5,0,0.5,0.52" etichette="2.4,0.47,X ≥ 1" titolo="Probability masses of $\operatorname{Bin}\left(4,\dfrac16\right)$. Counts to the right of the line correspond to at least one $6$. Those to the left form the complement."}
:::

:::attenzione
The binomial formula holds only if every trial has the same success probability. If two independent trials have probabilities $\dfrac14$ and $\dfrac34$, the probability of two successes is $\dfrac14\cdot\dfrac34=\dfrac{3}{16}$ and the mean number of successes is $\dfrac14+\dfrac34=1$. A $\operatorname{Bin}\left(2,\dfrac12\right)$ random variable has the same mean, $1$, but probability $\dfrac14$ of two successes. Two counts with the same mean therefore have, in this case, different distributions.
:::

## Geometric waiting times and waiting for several successes

:::definizione{#geometrica titolo="Geometric distribution"}
A die is rolled until a $6$ comes up. The first $6$ comes on the third roll with probability $\left(\dfrac56\right)^2\dfrac16=\dfrac{25}{216}$, because the first two rolls fail and the third succeeds. It comes after the second roll with probability $\left(\dfrac56\right)^2=\dfrac{25}{36}$, because it is enough that the first two rolls fail.

In general, repeat independent trials with constant success probability $p$, where $0<p<1$. Let $T$ be the number of the trial on which the first success occurs, counting that trial; $T$ is called the waiting time for the first success and has the **geometric** distribution with parameter $p$. Setting $q=1-p$ gives
$$
P(T=k)=q^{k-1}p,\quad k=1,2,\ldots,
\qquad P(T>m)=q^m,\quad m=0,1,\ldots.
$$
The event $T=k$ requires $k-1$ failures followed by one success. The event $T>m$ instead requires all of the first $m$ trials to fail. The probability $P(T>m)$ is called the **tail** of the distribution beyond $m$, because it is the sum of the masses of all values greater than $m$.

The mean is $E[T]=\dfrac1p$ and the variance is $\operatorname{Var}(T)=\dfrac{1-p}{p^2}$; for the die, the first $6$ comes on average on the sixth roll. In the case $p=1$, excluded by the hypothesis, every trial succeeds, so $T=1$ with certainty, and the formulas still give $E[T]=1$ and $\operatorname{Var}(T)=0$. The random variable $T-1$ counts only the failures before the first success and starts at $0$.
:::

:::osservazione
The formulas for the mean and variance of the geometric distribution follow from the tails. If $T$ equals $k$, the events $\{T>m\}$ that occur are those with $m=0,1,\ldots,k-1$, that is, exactly $k$ of them. Therefore $T$ is the sum of the indicators of the events $\{T>m\}$, for $m=0,1,2,\ldots$, and its expected value is the sum of the tails:
$$
E[T]=\sum_{m=0}^{\infty}P(T>m)=\sum_{m=0}^{\infty}q^m=\frac{1}{1-q}=\frac1p.
$$
The sum has infinitely many terms; exchanging expectation and sum is allowed because the terms are nonnegative.

For the variance, the same idea is applied to $T(T-1)$. If $T=k$, then $k(k-1)=2\,(0+1+\cdots+(k-1))=2\sum_{m=0}^{k-1}m$, so $T(T-1)$ is the sum of the numbers $2m$ for which $T>m$, and
$$
E[T(T-1)]=2\sum_{m\ge0}m\,P(T>m)=2\sum_{m\ge0}m\,q^m.
$$
Let $S=\sum_{m\ge0}m\,q^m$. Multiplying by $q$ gives $qS=\sum_{m\ge0}m\,q^{m+1}=\sum_{m\ge1}(m-1)q^m$, so $S-qS=\sum_{m\ge1}q^m=\dfrac{q}{1-q}$. Since $1-q=p$, it follows that $S=\dfrac{q}{p^2}$ and $E[T(T-1)]=\dfrac{2q}{p^2}$. Then
$$
E[T^2]=E[T(T-1)]+E[T]=\frac{2q}{p^2}+\frac1p,
\qquad
\operatorname{Var}(T)=\frac{2q}{p^2}+\frac1p-\frac1{p^2}=\frac{2q+p-1}{p^2}=\frac{q}{p^2},
$$
because $p-1=-q$.
:::

:::esempio{titolo="Point probability and tail probability"}
Let $T$ be the number of the trial of the first success, with $p=\dfrac14$. The probability that the first success occurs on the fourth trial is $\left(\dfrac34\right)^3\dfrac14=\dfrac{27}{256}\approx0.105$. The probability that it occurs after the fourth trial is the tail $\left(\dfrac34\right)^4=\dfrac{81}{256}\approx0.316$. The fourth trial succeeds in the first calculation and fails in the second. For a success by the fourth trial, the complement gives $1-\left(\dfrac34\right)^4=\dfrac{175}{256}$.

::grafico{xmin=-0.6 xmax=9.5 ymin=-0.035 ymax=0.31 nomi="k,P(T = k)" legenda=0 linee="1,0 1,0.25;2,0 2,0.1875;3,0 3,0.140625;4,0 4,0.105469;5,0 5,0.079102;6,0 6,0.059326;7,0 7,0.044495;8,0 8,0.033371" punti="1,0.25,pieno;2,0.1875,pieno;3,0.140625,pieno;4,0.105469,pieno;5,0.079102,pieno;6,0.059326,pieno;7,0.044495,pieno;8,0.033371,pieno" segmenti="4.5,0,4.5,0.27" etichette="2.5,0.29,T ≤ 4;6.7,0.29,T > 4" titolo="First eight masses of the geometric distribution with $p=\dfrac14$. The masses to the right of the line, continued indefinitely, sum to $\left(\dfrac34\right)^4$."}
:::

::::teorema{#geometrica-memoria titolo="Memorylessness"}
A die is rolled until a $6$ comes up, and the first three rolls have not produced a $6$. Since the rolls are independent, the probability that the next two rolls also fail to produce a $6$ is $\left(\dfrac56\right)^2$, the same as the probability at the start for the first two rolls.

In general, let $T$ have a geometric distribution with $0<p<1$. For integers $m,k\ge 0$, $P(T>m+k\mid T>m)=P(T>k)$. Given that the first $m$ trials failed, the probability of waiting more than $k$ additional trials is the same as before the trials began.

:::dimostrazione
By the definition of conditional probability (Chapter 4), $P(T>m+k\mid T>m)=\dfrac{P(\{T>m+k\}\cap\{T>m\})}{P(T>m)}$, with $P(T>m)=q^m>0$. If the first $m+k$ trials failed, the first $m$ failed too, so $\{T>m+k\}$ is contained in $\{T>m\}$ and the intersection is $\{T>m+k\}$. Hence
$$
P(T>m+k\mid T>m)
=\frac{P(T>m+k)}{P(T>m)}
=\frac{q^{m+k}}{q^m}=q^k.
$$
:::

The exponential distribution of Chapter 6 has the same property for waiting times measured continuously.
::::

:::definizione{#binomiale-negativa titolo="Waiting for the rth success"}
A die is rolled until two $6$s have come up. The second $6$ comes on the fourth roll when the first three rolls contain exactly one $6$, in one of $\binom31=3$ positions, and the fourth roll is a $6$; the probability is $3\left(\dfrac16\right)^2\left(\dfrac56\right)^2=\dfrac{25}{432}$.

In general, let $T_r$ be the number of the trial on which the $r$th success occurs, with $r\ge1$ fixed. Under the same conditions as for the geometric distribution, $T_r$ has a **negative binomial** distribution. For $k\ge r$,
$$
P(T_r=k)=\binom{k-1}{r-1}p^r(1-p)^{k-r}.
$$
There must be exactly $r-1$ successes in the first $k-1$ trials, and the last trial must succeed.

The number of trials $T_r$ is the sum of $r$ waiting times: the trials up to the first success, then those from the first to the second success, and so on. The trials are independent and have the same probability $p$, so each waiting time is geometric with parameter $p$ and mean $\dfrac1p$. By linearity of expectation, $E[T_r]=\dfrac rp$; for two $6$s with a die, $12$ rolls are needed on average. When $r=1$, this reduces to the geometric distribution.
:::

## The Poisson distribution

:::definizione{#poisson titolo="Poisson probability mass function"}
Calls to a switchboard arrive one at a time, and their number in an hour has no fixed maximum. Counts of this kind are described by the Poisson distribution.

The **Poisson distribution** with parameter $\lambda>0$ (the Greek letter $\lambda$ is read lambda) assigns to the counts $k=0,1,2,\ldots$ the masses
$$
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!}.
$$
This is written $X\sim\operatorname{Pois}(\lambda)$. Since the exponential series gives $\sum_{k\ge 0}\dfrac{\lambda^k}{k!}=e^\lambda$, the masses sum to $e^{-\lambda}e^{\lambda}=1$. Also, $E[X]=\operatorname{Var}(X)=\lambda$, so the parameter $\lambda$ is the mean number of arrivals in the interval under consideration. With $\lambda=2$, for example, the probability of no arrivals is $e^{-2}\approx0.135$.

The ratio of two consecutive masses is $\dfrac{P(X=k+1)}{P(X=k)}=\dfrac{\lambda}{k+1}$, so the masses increase as long as $k+1<\lambda$ and then decrease; if $\lambda$ is an integer, the values $\lambda-1$ and $\lambda$ have the same mass, which is the largest. The Poisson distribution with parameter $np$ approximates the binomial distribution $\operatorname{Bin}(n,p)$ when there are many trials and $p$ is small, for example $n=100$ and $p=0.02$; only the Poisson distribution, however, assigns positive mass to counts greater than $n$.

A **homogeneous Poisson process** with rate $r$ is a model of arrivals that occur one at a time, with two properties.

- The number of arrivals in an interval of length $t$ has a Poisson distribution with parameter $rt$.
- The numbers of arrivals in disjoint intervals, that is, intervals with no stretch in common, are independent.

The rate $r$ is therefore the mean number of arrivals per unit time, and $r$ and $t$ must use the same time unit. By the second property, knowing how many arrivals occurred in one hour does not change the distribution of the number of arrivals in the next hour.
:::

:::esempio{titolo="Changing the observation period"}
Requests to a server arrive according to a homogeneous Poisson process with rate $6$ arrivals per hour. In $20\,\mathrm{min}$, or $\dfrac13\,\mathrm{h}$, the parameter is $6\cdot\dfrac13=2$. If $X$ is the count in these twenty minutes,
$$
P(X\le 1)=P(X=0)+P(X=1)=e^{-2}+2e^{-2}=3e^{-2}\approx0.406.
$$
A count of at least two is the complementary event and has probability $1-3e^{-2}\approx0.594$.

::grafico{xmin=-0.7 xmax=5.8 ymin=-0.045 ymax=0.37 nomi="k,p_X(k)" legenda=0 linee="0,0 0,0.135335;1,0 1,0.270671;2,0 2,0.270671;3,0 3,0.180447;4,0 4,0.090224;5,0 5,0.036089" punti="0,0.135335,pieno;1,0.270671,pieno;2,0.270671,pieno;3,0.180447,pieno;4,0.090224,pieno;5,0.036089,pieno" segmenti="1.5,0,1.5,0.3" etichette="0.67,0.327,up to 1;3.5,0.327,2 or more" titolo="First six Poisson masses for parameter 2. The line separates the two masses in the sum from those in its complement."}
:::

:::osservazione
The relation $P(X=k+1)=\dfrac{\lambda}{k+1}P(X=k)$ follows from the ratio of the two masses, since $\lambda^{k+1}=\lambda\cdot\lambda^k$ and $(k+1)!=(k+1)\,k!$. Starting from $P(X=0)=e^{-\lambda}$ and multiplying each time by $\dfrac{\lambda}{k+1}$ produces all the masses.

If $\lambda=3$, the ratio is $3$ for $k=0$ and $\dfrac32$ for $k=1$, so the masses increase from $0$ to $2$. For $k=2$ the ratio is $1$, so $P(X=2)=P(X=3)=\dfrac92e^{-3}\approx0.224$. For $k\ge3$ the ratio is less than $1$ and the masses decrease. Therefore $P(X=2)$ and $P(X=3)$ are the two largest masses.
:::

:::osservazione
For $n=100$ and $p=0.02$ the exact probability of zero successes is $0.98^{100}\approx0.1326$, whereas the Poisson distribution with parameter $np=2$ gives $e^{-2}\approx0.1353$.

Fix $\lambda>0$ and set $p_n=\dfrac{\lambda}{n}$, so that the mean $np_n=\lambda$ stays the same as $n$ grows. For each fixed $k$, the binomial mass at $k$ converges to the Poisson mass as $n\to\infty$, because its two factors have these limits:
$$
\binom nk\left(\frac{\lambda}{n}\right)^k=\frac{n(n-1)\cdots(n-k+1)}{n^k}\cdot\frac{\lambda^k}{k!}\longrightarrow\frac{\lambda^k}{k!},
\qquad
\left(1-\frac{\lambda}{n}\right)^{n-k}\longrightarrow e^{-\lambda}.
$$
The first limit holds because each of the $k$ ratios $\dfrac nn,\dfrac{n-1}n,\ldots$ tends to $1$; the second is the standard limit for the exponential.

For the counts from $0$ to $5$ the masses of the two distributions differ by less than $0.003$, but the supports remain different, because the binomial distribution with $n=100$ has support $\{0,1,\ldots,100\}$, whereas the Poisson distribution has all the natural numbers as its support.

::grafico{xmin=-0.7 xmax=5.8 ymin=-0.035 ymax=0.33 nomi="k,massa" legenda=0 linee="-0.1,0 -0.1,0.13262;0.9,0 0.9,0.270652;1.9,0 1.9,0.273414;2.9,0 2.9,0.182276;3.9,0 3.9,0.090208;4.9,0 4.9,0.035347" punti="-0.1,0.13262,pieno;0.9,0.270652,pieno;1.9,0.273414,pieno;2.9,0.182276,pieno;3.9,0.090208,pieno;4.9,0.035347,pieno;0.1,0.135335,vuoto;1.1,0.270671,vuoto;2.1,0.270671,vuoto;3.1,0.180447,vuoto;4.1,0.090224,vuoto;5.1,0.036089,vuoto" segmenti="0.1,0,0.1,0.135335;1.1,0,1.1,0.270671;2.1,0,2.1,0.270671;3.1,0,3.1,0.180447;4.1,0,4.1,0.090224;5.1,0,5.1,0.036089" titolo="Masses of $\operatorname{Bin}(100;\,0.02)$ (solid) and of the Poisson distribution with $\lambda=2$ (dashed), for $k$ from $0$ through $5$. The differences are smaller than $0.003$."}
:::

::::teorema{#momenti-poisson titolo="Deriving the Poisson moments"}
Let $X$ have a Poisson distribution with parameter $\lambda>0$. Its first moment is $E[X]=\lambda$, and the expected value of the product $X(X-1)$ is $\lambda^2$. The product $X(X-1)$ counts the ordered pairs of distinct arrivals in one observation: with $3$ arrivals there are $3\cdot2=6$ pairs. Its expected value gives the second moment, and hence the variance.

:::dimostrazione
In calculating $E[X]$, the term for $k=0$ is zero. For $k\ge1$, $\dfrac{k}{k!}=\dfrac{1}{(k-1)!}$; factor out $\lambda$ and shift the index by setting $j=k-1$. This gives
$$
E[X]=e^{-\lambda}\sum_{k=1}^{\infty}\frac{k\lambda^k}{k!}
=\lambda e^{-\lambda}\sum_{j=0}^{\infty}\frac{\lambda^j}{j!}
=\lambda e^{-\lambda}e^{\lambda}=\lambda.
$$
In calculating $E[X(X-1)]$, the terms for $k=0$ and $k=1$ are zero. For $k\ge2$, $\dfrac{k(k-1)}{k!}=\dfrac{1}{(k-2)!}$; factor out $\lambda^2$ and shift the index by setting $j=k-2$, so the same series multiplied by $\lambda^2 e^{-\lambda}$ gives $\lambda^2$. Since $X^2=X(X-1)+X$, linearity gives $E[X^2]=\lambda^2+\lambda$, and finally $\operatorname{Var}(X)=E[X^2]-(E[X])^2=\lambda^2+\lambda-\lambda^2=\lambda$.
:::

For a Poisson count with mean $4$, the variance is therefore $4$ and the standard deviation is $\sqrt4=2$. The standard deviation is expressed in the same unit as the count, that is, in number of arrivals.
::::

## Sampling without replacement

:::definizione{#ipergeometrica titolo="Hypergeometric distribution"}
From a batch of $10$ items with $3$ defective ones, $2$ items are drawn without replacement, with all pairs equally likely. There are $\binom{10}2=45$ pairs; those with exactly one defective item number $\binom31\binom71=21$, because the defective item is chosen from $3$ and the other item from $7$. The probability of exactly one defective item is therefore $\dfrac{21}{45}=\dfrac7{15}$, as in the draws without replacement of Chapter 3.

In general, a population of $N\ge1$ units contains $R$ units of interest, with $0\le R\le N$. A subset of $n$ units is selected uniformly, with $1\le n\le N$, that is, so that all $\binom Nn$ subsets of $n$ units have the same probability. The count $X$ of units of interest in the sample has a **hypergeometric** distribution. For
$$
\max(0,n-(N-R))\le k\le\min(n,R)
$$
its probability mass function is
$$
P(X=k)=\frac{\binom Rk\binom{N-R}{n-k}}{\binom Nn}.
$$
Choose $k$ units of interest from the $R$ available and $n-k$ units from the other $N-R$. The denominator counts all equally likely samples.

The endpoints of the support come from the composition of the population. We have $k\le n$ and $k\le R$, so $k\le\min(n,R)$. The other $n-k$ units in the sample are at most the $N-R$ available, so $k\ge n-(N-R)$, and also $k\ge0$.
:::

:::esempio{titolo="Support bounds and exact probability"}
A batch contains $7$ nondefective items and $3$ defective ones. Draw $8$ items uniformly without replacement, and let $X$ be the number of defective items drawn. Since only $7$ nondefective items are available, at least one item drawn must be defective. Since there are only $3$ defective items, the support of $X$ is $\{1,2,3\}$. The probability of drawing exactly one defective item is
$$
P(X=1)=\frac{\binom31\binom77}{\binom{10}8}
=\frac{3}{45}=\frac1{15}.
$$
This event requires all seven nondefective items, so the three favorable samples differ only in which defective item was drawn. The same counting argument gives $P(X=2)=P(X=3)=\dfrac{21}{45}=\dfrac7{15}$ because $\binom32\binom76=\binom33\binom75=21$.

::grafico{xmin=-0.6 xmax=4.3 ymin=-0.06 ymax=0.6 nomi="k,P(X = k)" legenda=0 linee="1,0 1,0.066667;2,0 2,0.466667;3,0 3,0.466667" punti="1,0.066667,pieno;2,0.466667,pieno;3,0.466667,pieno" etichette="1.3,0.11,1⁄15;2.3,0.51,7⁄15;3.3,0.51,7⁄15" titolo="Number of defective items among $8$ drawn from $7$ nondefective and $3$ defective items. The value $0$ has zero mass because there are only $7$ nondefective items."}
:::

:::osservazione
Let $p=\dfrac RN$ be the proportion of units of interest in the population; then $E[X]=np$. Indeed, if the $n$ units are drawn one at a time, the unit in position $i$ is equally likely to be any of the $N$ units, so it is a unit of interest with probability $p$. The count is the sum of the $n$ position indicators, and linearity of expectation gives $E[X]=np$ even though the indicators are dependent. For $N>1$,
$$
\operatorname{Var}(X)=np(1-p)\frac{N-n}{N-1}.
$$
The factor $\dfrac{N-n}{N-1}$ is called the finite population correction. If $n=N$, the count is always $R$; indeed the factor is zero and so is the variance. With replacement the draws are independent, so the count is binomial and its variance is $np(1-p)$. With $N=10$, $R=3$, and $n=2$ the variance is $0.42\cdot\dfrac89=\dfrac{28}{75}\approx0.373$ without replacement and $0.42$ with replacement.
:::

::::teorema{#dipendenza-campionamento titolo="Dependence when sampling a finite population"}
From a batch of $10$ items with $3$ defective ones, two items are drawn without replacement. The first is defective with probability $\dfrac3{10}$; if it is, $2$ defective items remain among $9$, so both are defective with probability $\dfrac3{10}\cdot\dfrac29=\dfrac1{15}\approx0.067$. With independent draws the same probability would be $\left(\dfrac3{10}\right)^2=0.09$.

In general, let $X$ be the number of units of interest in a uniform sample drawn without replacement, with $N>1$. Let $I_i$ be the indicator that position $i$ contains a unit of interest. For two distinct positions, the probability that both indicators equal $1$ is
$$
E[I_i I_j]=\frac{R(R-1)}{N(N-1)}.
$$
Since each indicator has mean $p=\dfrac RN$, the difference between this joint probability and $p^2$ is $-\dfrac{p(1-p)}{N-1}$. The hypergeometric variance $np(1-p)\dfrac{N-n}{N-1}$ follows from this difference.

:::dimostrazione
By symmetry of the positions, it suffices to consider the first two draws. The first belongs to the group of interest with probability $\dfrac RN$. If it belongs to that group and $R>0$, the probability that the second belongs to it is $\dfrac{R-1}{N-1}$, since both the number of units of interest and the total number of units have fallen by one. Multiplying the probabilities gives the formula, which also holds for $R=0$ because both indicators are then always zero. The difference from $p^2$ is
$$
\frac RN\cdot\frac{R-1}{N-1}-\frac RN\cdot\frac RN
=\frac RN\cdot\frac{N(R-1)-R(N-1)}{N(N-1)}
=\frac RN\cdot\frac{R-N}{N(N-1)}
=-\frac{p(1-p)}{N-1},
$$
because $\dfrac{R-N}{N}=-(1-p)$.

For the variance, $X-np$ is the sum of the deviations $I_i-p$, for $i=1,\ldots,n$, and $\operatorname{Var}(X)=E[(X-np)^2]$. Expanding the square of the sum gives $n$ individual terms $(I_i-p)^2$ and $n(n-1)$ products $(I_i-p)(I_j-p)$ for distinct positions, counted in order. Each individual term has mean $E[(I_i-p)^2]=\operatorname{Var}(I_i)=p(1-p)$. Each product has mean
$$
E[(I_i-p)(I_j-p)]=E[I_iI_j]-p\,E[I_j]-p\,E[I_i]+p^2=E[I_iI_j]-p^2=-\frac{p(1-p)}{N-1}.
$$
Adding up,
$$
\operatorname{Var}(X)=np(1-p)-\frac{n(n-1)p(1-p)}{N-1}=np(1-p)\left(1-\frac{n-1}{N-1}\right)=np(1-p)\frac{N-n}{N-1}.
$$
:::

When $0<R<N$, the dependence is negative. After drawing a unit of interest, the probability of drawing another falls (from $\dfrac3{10}$ to $\dfrac29$ in the example), while after drawing from the other group it rises (to $\dfrac39$). These changes preserve the same probability $p$ at every position but make extreme counts less likely than with independent draws having the same $p$. In the example, besides two defective items, no defective item is also less likely: $\dfrac7{10}\cdot\dfrac69=\dfrac7{15}\approx0.467$ against $0.7^2=0.49$. If one category has too few units for an extreme count, that count is impossible without replacement, like zero defective items among $8$ drawn from $7$ nondefective and $3$ defective ones.
::::

## Sums of counts and choosing a distribution

::::teorema{#somme titolo="Sums of independent counts"}
The number of heads in three tosses of a coin is $\operatorname{Bin}\left(3,\dfrac12\right)$, the number in five further tosses is $\operatorname{Bin}\left(5,\dfrac12\right)$, and the total is the number of heads in eight tosses, that is, $\operatorname{Bin}\left(8,\dfrac12\right)$.

In general, if $X$ and $Y$ are independent binomial random variables with the same success probability $p$ and trial counts $n$ and $m$, their sum has distribution $\operatorname{Bin}(n+m,p)$. If they are independent Poisson random variables with parameters $\lambda_1$ and $\lambda_2$, their sum has distribution $\operatorname{Pois}(\lambda_1+\lambda_2)$.

:::dimostrazione
For the first assertion, since $X$ and $Y$ are independent, the probability of each pair of values $X=j$, $Y=i$ is the product of the two masses (the distribution of the pair, called the joint distribution, is the subject of Chapter 7). The same probabilities arise from counting successes in two disjoint groups of $n$ and $m$ trials, all independent with the same $p$, so $X+Y$ has the distribution of the number of successes in $n+m$ trials.

For the second, the event $\{X+Y=k\}$ is the union of the disjoint events $\{X=j,\,Y=k-j\}$, for $j=0,\ldots,k$. By independence each has probability $P(X=j)\,P(Y=k-j)$, so
$$
\begin{aligned}
P(X+Y=k)
&=\sum_{j=0}^k e^{-\lambda_1}\frac{\lambda_1^j}{j!}\,e^{-\lambda_2}\frac{\lambda_2^{k-j}}{(k-j)!}\\[6pt]
&=e^{-(\lambda_1+\lambda_2)}\sum_{j=0}^k\frac{\lambda_1^j\lambda_2^{k-j}}{j!(k-j)!}\\[6pt]
&=\frac{e^{-(\lambda_1+\lambda_2)}}{k!}
\sum_{j=0}^k\binom kj\lambda_1^j\lambda_2^{k-j}\\[6pt]
&=e^{-(\lambda_1+\lambda_2)}\frac{(\lambda_1+\lambda_2)^k}{k!}.
\end{aligned}
$$
The third step multiplies and divides by $k!$, using $\dfrac{k!}{j!(k-j)!}=\binom kj$. The last equality is the binomial theorem for the power of a sum, $(a+b)^k=\sum_{j=0}^k\binom kj a^j b^{k-j}$, with $a=\lambda_1$ and $b=\lambda_2$.
:::

If two independent streams produce an average of two and three arrivals in the same hour, respectively, and their counts are Poisson, the hourly total is Poisson with parameter $2+3=5$. The probability of an hour without arrivals is therefore $e^{-5}\approx0.0067$.
::::

:::osservazione
Linearity, $E[X+Y]=E[X]+E[Y]$, holds also for dependent random variables, whereas the rule $\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$ requires independence. With dependence, the term $2\operatorname{Cov}(X,Y)$ is added to the sum of the variances, where $\operatorname{Cov}$ is the covariance of Chapter 7. In the extreme case $Y=X$ the sum is $2X$ and, by the rule for affine transformations, $\operatorname{Var}(2X)=4\operatorname{Var}(X)$, twice $\operatorname{Var}(X)+\operatorname{Var}(X)$.
:::

:::esempio{titolo="Four questions about the same inspection"}
An inspector tests devices and calls a pass a success.

- The number of devices passing among $10$ independent inspections, each with the same probability of passing, has a binomial distribution.
- The number of inspections up to the first pass, under the same conditions, has a geometric distribution.
- The number of nondefective devices among $10$ selected without replacement from a batch with a known number of nondefective devices has a hypergeometric distribution.
- The number of alerts recorded in an hour, if the arrivals form a homogeneous Poisson process, has a Poisson distribution.

In all four cases the random variable is a count, while the support and the procedure used to collect the data determine the distribution.
:::
