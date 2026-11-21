---
titolo: "Sampling, the law of large numbers, and the central limit theorem"
sommario: "How a statistic varies across samples, how to calculate exact probabilities, and how to obtain normal approximations and upper bounds."
---

A company measures the length of $36$ parts chosen at random from a production run of many thousands and obtains a mean of $81.5\,\mathrm{mm}$. The mean length of all the parts produced is another number, which nobody knows. With $36$ different parts, another mean would have been obtained, for example $79.8\,\mathrm{mm}$. This chapter calculates how much the mean of a sample changes from one sample to another. For example, if the lengths of individual parts have standard deviation $12\,\mathrm{mm}$, the means of samples of $36$ parts have standard deviation $2\,\mathrm{mm}$, and the probability that one of them exceeds the mean of the whole production by more than $4\,\mathrm{mm}$ is about $0.0228$.

The tools are of three kinds. The first is the exact distribution of the mean, which is obtained when the individual measurements are normally distributed. The second consists of Markov's and Chebyshev's inequalities, which give an upper bound for a probability from the mean and variance alone. The third consists of two theorems about the behavior of the mean as the number of observations grows, the law of large numbers and the central limit theorem. The chapter also covers proportions, such as the fraction of defective parts in a sample, and samples drawn without replacement from a finite population.

This chapter opens the part of the course on statistical inference, that is, on passing from the sample to the whole population. Population, sample, parameter, and statistic were defined in Chapter 1, and the mean and variance of a data set in Chapter 2. From the probability chapters we use random variables and their distributions (Chapters 5 and 6, in particular the normal distribution) and the rules for the mean and variance of a sum (Chapter 7). The results of this chapter are used in the following chapters: in Chapter 9 to assess the precision of an estimate, in Chapter 10 to construct confidence intervals, and in Chapter 11 for hypothesis tests.

## From sample to statistic

:::definizione{#campione titolo="Random samples and statistics"}
Draw $5$ students at random, one after another, from a large university and measure their heights. Before the draw, the height of the first student drawn is a random number. Its possible values and their probabilities are those of the heights of all enrolled students. If $30\,\%$ of the enrolled students are taller than $180\,\mathrm{cm}$, the first student drawn is taller than $180\,\mathrm{cm}$ with probability $0.3$, and the same holds for the second, the third, and so on. Probabilities concerning a single observation therefore coincide with the relative frequencies in the population.

With $n$ observations, let $X_1,\ldots,X_n$ be random variables with the same distribution, where $X_i$ is the value of observation $i$. The variables are called independent if, for every choice of sets $A_1,\ldots,A_n$,
$$
P(X_1\in A_1,\ldots,X_n\in A_n)=P(X_1\in A_1)\cdots P(X_n\in A_n).
$$
For $n=2$ this is the definition of independence of a pair given in Chapter 7. In the example, the probability that all five students are taller than $180\,\mathrm{cm}$ is $0.3^5=0.00243$. Variables that are independent and have the same distribution are called independent and identically distributed, abbreviated i.i.d.; the sequence $X_1,\ldots,X_n$ then forms an **i.i.d. sample** of size $n$.

A **statistic** is a function of the data and known constants. The mean, the maximum, and the number of observations exceeding a known threshold are all statistics. The quantity $\bar X_n-\mu$, where $\bar X_n$ is the mean of the observations and $\mu$ (read mu) is the unknown population mean, is not a statistic, because computing it requires $\mu$. Before the data are collected, statistics are random variables because they take different values under repeated sampling. Once the data have been collected, the numbers $x_1,\ldots,x_n$ form a realization of the sample and give the observed value of the statistic. If the five observed heights are $172$, $181$, $168$, $185$, and $174\,\mathrm{cm}$, the observed mean is $\dfrac{880}{5}=176\,\mathrm{cm}$, the maximum is $185\,\mathrm{cm}$, and $2$ observations are above $180\,\mathrm{cm}$.

The distribution of a statistic, called its sampling distribution, gives the probability that the statistic falls in each set of values, taking into account all possible samples. The rest of the chapter calculates this distribution for the mean and for the proportion.
:::

:::esempio{titolo="Distribution of the mean of two trials"}
Two independent measurements each take the values $0$ and $1$ with equal probability, like the results of two coin tosses in which $1$ denotes heads. The four ordered outcomes are equally likely. The mean equals $0$ for outcome $(0,0)$, equals $\dfrac12$ for outcomes $(0,1)$ and $(1,0)$, and equals $1$ for outcome $(1,1)$. Its distribution therefore assigns probabilities $\dfrac14$, $\dfrac12$, and $\dfrac14$ to the three values. If the observed sample is $(1,0)$, the observed mean is $\bar x=\dfrac12$.

::grafico{xmin=-0.27 xmax=1.35 ymin=-0.05 ymax=0.66 nomi="m,p" linee="0,0 0,0.25;0.5,0 0.5,0.5;1,0 1,0.25" punti="0,0.25;0.5,0.5;1,0.25" etichette="0.08,0.31,¼;0.5,0.56,½;1,0.31,¼;0.5,-0.035,½" titolo="The probability mass at one-half is twice as large because two ordered outcomes give this mean."}
:::

:::attenzione
Observations can have the same distribution and still be dependent. Let $Y$ be an indicator that equals $1$ with probability $\dfrac12$, and set $X_1=X_2=Y$. Each observation has the same distribution as in the example, but the pair takes only the values $(0,0)$ and $(1,1)$. The mean then equals $Y$ and has variance $\dfrac14$, whereas the mean of two independent trials has variance $\dfrac18$. The formulas of this chapter for the mean therefore require independence.

Dependence of this kind arises when the same unit is measured several times, or in cluster sampling, where groups of units, called clusters, are drawn at random and every unit in each selected group is measured. The three thickness measurements of a single tile in Chapter 1 are an example: if the tile is thicker than average, the three measurements tend to be all high.
:::

## Sample mean and standard error

::::teorema{#media-campionaria titolo="Distribution of the mean"}
In the example of two trials, each measurement has mean $\dfrac12$ and variance $\dfrac14$. The mean of the two measurements still has mean $\dfrac12$, whereas its variance is $\dfrac14\cdot\left(-\dfrac12\right)^2+\dfrac12\cdot0^2+\dfrac14\cdot\left(\dfrac12\right)^2=\dfrac18$, that is, half the variance of one measurement. The following theorem states that with $n$ independent observations the variance of the mean is the variance of one measurement divided by $n$.

Let $X_1,\ldots,X_n$ be an i.i.d. sample from a distribution with mean $\mu$ and finite variance $\sigma^2$ (read sigma squared), where $\sigma$ is the standard deviation of the individual observations. The **sample mean** is $\bar X_n=\dfrac{1}{n}\sum_{i=1}^nX_i$. The **standard error** of a statistic $T$ with finite variance is the standard deviation of its sampling distribution, denoted by $SE(T)$. Writing $E$ for the expected value and $\operatorname{Var}$ for the variance of a random variable (Chapter 5), for the mean
$$
E[\bar X_n]=\mu,\qquad
\operatorname{Var}(\bar X_n)=\frac{\sigma^2}{n},\qquad
SE(\bar X_n)=\frac{\sigma}{\sqrt n}.
$$
The value $\sigma$ indicates how far individual observations typically lie from $\mu$. The quantity $SE(\bar X_n)$ indicates how far the means of samples of the same size lie from $\mu$, in the same units as the data. In the example of the introduction, the lengths of individual parts have $\sigma=12\,\mathrm{mm}$, whereas the means of $36$ parts have standard error $2\,\mathrm{mm}$. The standard error is the measure of the precision of a mean used in Chapters 9, 10, and 11.

:::dimostrazione
For the center of the distribution, use linearity of expectation (Chapter 7). Each $X_i$ has expectation $\mu$, so $E[\bar X_n]=\dfrac{n\mu}{n}=\mu$. For the spread, use independence. The covariances between distinct observations are zero, so the variance of the sum is the sum of the variances (Chapter 7), that is, $n\sigma^2$. Multiplying a variable by $\dfrac1n$ multiplies its variance by $\dfrac1{n^2}$, so the variance of the mean is $\dfrac{n\sigma^2}{n^2}=\dfrac{\sigma^2}{n}$. Its square root is the standard error.
:::
::::

:::esempio{titolo="Precision when sampling again"}
Individual measurements have standard deviation $12\,\mathrm{mm}$. For a sample of $36$ independent measurements, the mean has standard error $\dfrac{12}{\sqrt{36}}\,\mathrm{mm}=\dfrac{12}{6}\,\mathrm{mm}=2\,\mathrm{mm}$. Achieving $1\,\mathrm{mm}$ requires at least $144$ measurements, because $\dfrac{12}{\sqrt n}\le1$ is equivalent to $\sqrt n\ge12$, that is, to $n\ge144$. Since $144=4\cdot36$, halving the standard error requires four times as many observations if the population spread stays the same.

::grafico{curve="t,12/sqrt(t),4,156" xmin=0 xmax=160 ymin=-0.3 ymax=6.6 nomi="n,SE" legenda="SE=\dfrac{12}{\sqrt n}" punti="36,2;144,1" segmenti="36,0,36,2;144,0,144,1" etichette="44,2.5,n = 36;144,1.5,n = 144" titolo="The standard error $\dfrac{12}{\sqrt n}$ in millimeters is $2$ at $n=36$ and $1$ at $n=144$."}
:::

:::osservazione{titolo="Estimating the standard error"}
The formula $\dfrac{\sigma}{\sqrt n}$ contains the population standard deviation $\sigma$, which is usually unknown. In its place, for $n\ge2$, the sample standard deviation $S$ is used, that is, the square root of the corrected sample variance of Chapter 2:
$$
S^2=\frac{1}{n-1}\sum_{i=1}^n(X_i-\bar X_n)^2.
$$
The estimator of the standard error is $\dfrac{S}{\sqrt n}$. If a sample of $25$ measurements gives $s=10\,\mathrm{mm}$, the estimate is $\dfrac{10}{5}\,\mathrm{mm}=2\,\mathrm{mm}$. A new sample of the same size gives a different value of $s$, for example $s=12\,\mathrm{mm}$, and hence the estimate $2.4\,\mathrm{mm}$. The estimate changes with the data, whereas the theoretical standard error is determined by $n$ and the population.
:::

:::osservazione{titolo="Precision with a common error component"}
An instrument introduces the same random calibration error $B$ into every measurement in a session: if in one session the instrument reads $0.5\,\mathrm{mm}$ too high, all the measurements of that session come out $0.5\,\mathrm{mm}$ too long. Suppose observation $i$ has the form $X_i=\mu+B+E_i$, where the errors $E_i$ are independent of each other and of $B$. If $\operatorname{Var}(B)=\tau^2$ ($\tau$ is read tau) and each $E_i$ has variance $\sigma_E^2$, then
$$
\operatorname{Var}(\bar X_n)=\tau^2+\frac{\sigma_E^2}{n}.
$$
Indeed, the mean is $\mu+B+\bar E_n$, where $\bar E_n$ is the mean of the errors $E_i$. Since $B$ and $\bar E_n$ are independent, their variances add. The variance of $\bar E_n$ equals that of an individual error divided by $n$, by the previous theorem. The same component $B$, on the other hand, appears with coefficient one in each mean, so it retains its variance $\tau^2$.

It follows that the variance of the mean stays above $\tau^2$ however large $n$ becomes: adding measurements to a session reduces only the part $\dfrac{\sigma_E^2}{n}$. When sessions are repeated independently, the calibration component changes across sessions and contributes to the variation among their means. For example, with $\tau=1$, $\sigma_E=4$, and $n=16$, the variance of the mean is $1+\dfrac{16}{16}=2$, and with $n=1600$ it is $1+\dfrac{16}{1600}=1.01$. Treating all measurements as independent would give $\dfrac{17}{16}$ for $n=16$, because each measurement has variance $1+16=17$. The correct value $2$ is larger because two measurements from the same session have positive covariance, equal to $\tau^2$.

::grafico{curve="t,1+16/t,1,48;t,17/t,1,48" xmin=-0.45 xmax=49 ymin=-0.22 ymax=6.8 nomi="n,V" legenda="1+\dfrac{16}{n};\dfrac{17}{n}" segmenti="16,0,16,2" punti="16,2;16,1.0625" asintoti="y=1" titolo="With a common error, the variance of the mean tends to 1. For 16 measurements it equals 2, whereas independent measurements with individual variance 17 would give a variance of seventeen sixteenths."}
:::

## Exact sampling distributions for a normal population

::::teorema{#normale-campione titolo="Mean and variance in a normal sample"}
Measure $36$ parts whose length is normally distributed with mean $80\,\mathrm{mm}$ and standard deviation $12\,\mathrm{mm}$. By the previous theorem, the mean of the $36$ parts has center $80\,\mathrm{mm}$ and standard error $2\,\mathrm{mm}$. The following theorem adds that the mean is also normally distributed, so the probability that it does not exceed $83\,\mathrm{mm}$ is obtained from the cumulative distribution function of the standard normal distribution, denoted by $\Phi$ (read phi) and calculated with the table of Chapter 6. This probability equals $\Phi\!\left(\dfrac{83-80}{2}\right)=\Phi(1.5)\approx0.9332$.

Recall from Chapter 6 that $X\sim N(\mu,\sigma^2)$ denotes a variable with a normal distribution with mean $\mu$ and variance $\sigma^2$, and that $N(0,1)$ is the standard normal distribution. If $X_1,\ldots,X_n$ are independent and each has distribution $N(\mu,\sigma^2)$ with $\sigma>0$, then
$$
\bar X_n\sim N\!\left(\mu,\frac{\sigma^2}{n}\right).
$$
Consequently,
$$
P(\bar X_n\le a)=\Phi\!\left(\frac{a-\mu}{\dfrac{\sigma}{\sqrt n}}\right).
$$
The denominator is the standard error of the mean. The formula gives the exact probability for every sample size, even for $n=4$. The central limit theorem, later in the chapter, gives instead an approximate value that applies to non-normal populations when $n$ is large.

:::dimostrazione
We use the following fact, which is accepted without proof: if $Y_1,\ldots,Y_n$ are independent normal variables and $a_1,\ldots,a_n$ are real numbers, not all zero, the linear combination $a_1Y_1+\cdots+a_nY_n$ is normally distributed. For two terms this can be checked by evaluating the integral in the convolution formula of Chapter 7. For example, if $Y_1\sim N(1,4)$ and $Y_2\sim N(2,9)$ are independent, the sum $Y_1+Y_2$ has distribution $N(3,13)$.

The sample mean is a linear combination in which every coefficient equals $\dfrac1n$, so it is normally distributed. A normal distribution is determined by its mean and variance, which by the previous theorem equal $\mu$ and $\dfrac{\sigma^2}{n}$. Subtracting $\mu$ and dividing by $\dfrac{\sigma}{\sqrt n}$ gives a standard normal variable, by the standardization of the normal distribution in Chapter 6. The formula for $P(\bar X_n\le a)$ follows.
:::
::::

:::osservazione{titolo="Lower-tail quantiles"}
Write $z_q$ for the standard normal quantile of order $q\in(0,1)$, defined by $\Phi(z_q)=q$. For example, $z_{0.95}\approx1.645$, because the standard normal distribution leaves an area of $0.95$ to the left of $1.645$. The quantile of order $q$ of the normally distributed sample mean is the value $x$ for which $P(\bar X_n\le x)=q$. By the previous theorem this means $\Phi\!\left(\dfrac{x-\mu}{\dfrac{\sigma}{\sqrt n}}\right)=q$, that is, $\dfrac{x-\mu}{\dfrac{\sigma}{\sqrt n}}=z_q$, and hence
$$
x=\mu+z_q\frac{\sigma}{\sqrt n}.
$$
For example, if $\mu=80$, $\sigma=12$, and $n=36$, the quantile of order $0.95$ is approximately $83.29$ because $80+1.645\cdot2=83.29$. In repeated sampling, $5\,\%$ of sample means exceed this threshold.
:::

:::teorema{#student-campione titolo="The t statistic and the sample variance"}
When $\sigma$ is unknown, $\sigma$ is replaced by the sample standard deviation $S$ in the standardized mean $\dfrac{\bar X_n-\mu}{\dfrac{\sigma}{\sqrt n}}$. For example, with nine measurements, $\mu=16$, $\bar x=18$, and $s=6$, the observed value is $\dfrac{18-16}{\dfrac63}=1$. The resulting quotient is no longer standard normal, because the denominator changes from one sample to another. Its distribution is one of the distributions of Chapter 6, recalled here.

- If $Z_1,\ldots,Z_\nu$ are independent standard normal variables, the sum $Z_1^2+\cdots+Z_\nu^2$ has a chi-square distribution with $\nu$ degrees of freedom, denoted by $\chi^2_\nu$ ($\nu$ is read nu, $\chi$ is read chi).
- If $Z\sim N(0,1)$ and $U\sim\chi^2_\nu$ are independent, the quotient $\dfrac{Z}{\sqrt{\dfrac{U}{\nu}}}$ has a Student t distribution with $\nu$ degrees of freedom, denoted by $t_\nu$.

Under the normal-sample assumptions, for $n\ge2$ the mean $\bar X_n$ and the sample variance $S^2$ are independent, and
$$
\frac{(n-1)S^2}{\sigma^2}\sim\chi^2_{n-1},
\qquad
\frac{\bar X_n-\mu}{\dfrac{S}{\sqrt n}}\sim t_{n-1}.
$$
The number of degrees of freedom is $n-1$ because the $n$ deviations $X_i-\bar X_n$ sum to zero, since $\sum_{i=1}^n(X_i-\bar X_n)=\sum_{i=1}^nX_i-n\bar X_n=0$. Hence, once $n-1$ deviations are known, the last one is determined. The proof of the first distribution and of the independence of $\bar X_n$ and $S^2$ uses a change of coordinates in the space of the $n$ observations, which decomposes the vector of standardized observations along the direction $(1,\ldots,1)$ and the perpendicular directions; it requires linear algebra and is omitted here.

The second distribution follows from the first and from the definition of $t_\nu$. Set $Z=\dfrac{\bar X_n-\mu}{\dfrac{\sigma}{\sqrt n}}$, which has distribution $N(0,1)$ by the previous theorem, and $U=\dfrac{(n-1)S^2}{\sigma^2}$, which has distribution $\chi^2_{n-1}$ and is independent of $Z$. Since $\sqrt{\dfrac{U}{n-1}}=\dfrac{S}{\sigma}$, we obtain
$$
\frac{Z}{\sqrt{\dfrac{U}{n-1}}}
=\frac{\bar X_n-\mu}{\dfrac{\sigma}{\sqrt n}}\cdot\frac{\sigma}{S}
=\frac{\bar X_n-\mu}{\dfrac{S}{\sqrt n}},
$$
which therefore has distribution $t_{n-1}$. These two distributions are used to construct intervals for the variance and for the mean of a normal population with unknown $\sigma$ (Chapter 10) and in tests on the mean (Chapter 11).
:::

:::esempio{titolo="Degrees of freedom in a sample of nine measurements"}
For nine independent normal observations, the statistic $\dfrac{\bar X_9-\mu}{\dfrac{S}{3}}$ has distribution $t_8$. The number $8$ is also the number of degrees of freedom of $\dfrac{8S^2}{\sigma^2}$. Deviations from the sample mean sum to zero, so the other eight determine any one of them: if eight deviations sum to $-3$, the ninth equals $3$.

At zero, the density of $t_8$ is about $0.387$, compared with $0.399$ for the standard normal, and at $3$ it is about $0.013$, compared with $0.0044$. The $t_8$ distribution therefore assigns more probability to the tails, because the denominator of the statistic uses the estimate $S$ in place of $\sigma$, and in samples where $S$ turns out small the quotient becomes large.

::grafico{f="0.386699*(1+x^2/8)^(-4.5);exp(-x^2/2)/sqrt(2*PI)" xmin=-4.2 xmax=4.2 ymin=-0.03 ymax=0.46 nomi="t,f" legenda="t_8;N(0,1)" titolo="Densities of $t_8$ and the standard normal. The $t_8$ density is higher in the tails."}
:::

## Probability bounds from the mean and variance

::::teorema{#markov titolo="Markov's inequality"}
A nonnegative waiting time has mean $6\,\mathrm{min}$. If more than $25\,\%$ of the waits lasted at least $24\,\mathrm{min}$, these waits alone would contribute more than $0.25\cdot24=6\,\mathrm{min}$ to the mean, and the mean would exceed $6\,\mathrm{min}$, because the other waits are not negative. Hence the probability of a wait of at least $24\,\mathrm{min}$ is at most $0.25$. The same reasoning applies to every nonnegative variable.

Let $Y$ be a nonnegative random variable with finite expectation. For every threshold $a>0$,
$$
P(Y\ge a)\le\frac{E[Y]}{a}.
$$
The inequality gives an upper bound for the probability that a measurement reaches or exceeds a threshold using only its expectation, without knowing its distribution.

:::dimostrazione
Let $\mathbf 1_{\{Y\ge a\}}$ denote the indicator of the event $Y\ge a$, that is, the variable that equals $1$ if the event occurs and $0$ otherwise. On the event, the indicator equals $1$ and $Y$ is at least $a$. Off the event, the indicator equals $0$ and $Y$ is nonnegative. In either case, $Y\ge a\mathbf 1_{\{Y\ge a\}}$. Expectation preserves inequalities, and the expectation of an indicator is the probability of its event, so $E[Y]\ge aP(Y\ge a)$. Since $a$ is positive, we can divide by $a$.
:::
::::

:::esempio{titolo="Mean waiting time and long delays"}
A nonnegative waiting time has mean $6\,\mathrm{min}$. The probability that it is at least $24\,\mathrm{min}$ is at most $\dfrac{6}{24}=0.25$. If the only possible waiting times are $0$ and $24\,\mathrm{min}$, and the second has probability $0.25$, the mean is $0.25\cdot24=6\,\mathrm{min}$ and the bound is attained. With a different distribution having the same mean, the probability is smaller: if the wait is always exactly $6\,\mathrm{min}$, the probability of reaching $24\,\mathrm{min}$ is zero.
:::

::::teorema{#chebyshev titolo="Chebyshev's inequality"}
A measurement has mean $50$ and standard deviation $3$, and its distribution is unknown. The following inequality states that a deviation from the mean of at least $6$, in either direction, has probability at most $\dfrac{3^2}{6^2}=0.25$.

Let $X$ be a random variable with mean $\mu$ and finite variance $\sigma^2$. For every $\varepsilon>0$ ($\varepsilon$ is read epsilon),
$$
P(|X-\mu|\ge\varepsilon)\le\frac{\sigma^2}{\varepsilon^2}.
$$
The event $|X-\mu|\ge\varepsilon$ includes both tails about the center $\mu$, that is, $X\le\mu-\varepsilon$ and $X\ge\mu+\varepsilon$. If the threshold is $k\sigma$ with $k>0$ and $\sigma>0$, the upper bound is $\dfrac{\sigma^2}{k^2\sigma^2}=\dfrac{1}{k^2}$: for $k=2$, as in the example, it equals $0.25$.

:::dimostrazione
The squared deviation $Y=(X-\mu)^2$ is nonnegative and has expectation $\sigma^2$, by the definition of variance. The event $|X-\mu|\ge\varepsilon$ is equivalent to $Y\ge\varepsilon^2$, because squaring preserves the order of two nonnegative numbers. Applying Markov's inequality to $Y$ with threshold $\varepsilon^2$ gives $P(Y\ge\varepsilon^2)\le\dfrac{\sigma^2}{\varepsilon^2}$.
:::
::::

:::esempio{titolo="A probability bound for a sample mean"}
Consider $16$ i.i.d. measurements with standard deviation $8\,\mathrm{g}$. The variance of their mean is $\dfrac{64}{16}=4\,\mathrm{g}^2$. Hence $P(|\bar X_{16}-\mu|\ge5)\le\dfrac4{25}=0.16$, with the threshold measured in grams. Taking the complementary event gives $P(|\bar X_{16}-\mu|<5)\ge1-0.16=0.84$. If the threshold is so small that the ratio exceeds $1$, the only upper bound this calculation gives is the general bound $1$: with the threshold $1\,\mathrm{g}$ the ratio is $\dfrac41=4$, and a probability is at most $1$ in any case.
:::

:::esempio{titolo="When Chebyshev's bound is attained"}
A centered variable $X$ takes values $-5$, $0$, and $5$ with respective probabilities $0.08$, $0.84$, and $0.08$. By symmetry, $E[X]=0$, and the variance is $E[X^2]=25\cdot0.16=4$. At threshold $5$ the event $|X|\ge5$ has probability $0.16$, which equals the bound $\dfrac4{25}$.

Considering just the tail $X\ge5$ gives probability $0.08$. Chebyshev's bound also applies to a single tail, because $\{X\ge5\}\subseteq\{|X|\ge5\}$ and hence $P(X\ge5)\le P(|X|\ge5)\le0.16$. The mean and variance alone do not determine the probability of a single tail. The variable that takes the values $-\dfrac53$, $0$, and $5$ with probabilities $0.36$, $0.52$, and $0.12$ still has mean $0$ and variance $4$, but $P(X\ge5)=0.12$.

::grafico{xmin=-7 xmax=7 ymin=-0.06 ymax=1 nomi="x,p" linee="-5,0 -5,0.08;0,0 0,0.84;5,0 5,0.08" punti="-5,0.08;0,0.84;5,0.08" etichette="-5,0.15,0.08;0.9,0.84,0.84;5,0.15,0.08" titolo="The two tails $|X|\ge5$ have total probability $0.16$, equal to Chebyshev's bound $\dfrac{4}{25}$."}
:::

## Weak law of large numbers

::::teorema{#legge-grandi-numeri titolo="Convergence in probability of the sample mean"}
Individual measurements have variance $4$. The mean of $100$ measurements has variance $\dfrac{4}{100}=0.04$, and Chebyshev's inequality with tolerance $0.5$ gives $P(|\bar X_{100}-\mu|\ge0.5)\le\dfrac{0.04}{0.25}=0.16$. With $1000$ measurements the bound drops to $\dfrac{0.004}{0.25}=0.016$. As the number of measurements increases, the bound tends to zero for every fixed tolerance.

Let $X_1,X_2,\ldots$ be a sequence of i.i.d. variables with mean $\mu$ and finite variance $\sigma^2$. Then $\bar X_n$ converges in probability to $\mu$. That is, for every fixed tolerance $\varepsilon>0$,
$$
\lim_{n\to\infty}P(|\bar X_n-\mu|>\varepsilon)=0.
$$
As the sample size increases, the probability that the sample mean falls outside the interval from $\mu-\varepsilon$ to $\mu+\varepsilon$ becomes as small as desired. This result is called the **weak law of large numbers**; the word "weak" distinguishes it from a stronger statement about the same mean, which is not covered in this course.

:::dimostrazione
Apply Chebyshev's inequality to each sample mean. Its distribution has center $\mu$ and variance $\dfrac{\sigma^2}{n}$. Since the event $|\bar X_n-\mu|>\varepsilon$ is contained in the event $|\bar X_n-\mu|\ge\varepsilon$,
$$
0\le P(|\bar X_n-\mu|>\varepsilon)
\le\frac{\sigma^2}{n\varepsilon^2}.
$$
With $\varepsilon$ fixed, the denominator increases with $n$ and the upper bound tends to zero. The squeeze theorem for limits gives the result.
:::
::::

:::esempio{titolo="Relative frequencies of an outcome"}
Let $X_i$ equal $1$ if trial $i$ produces a specified outcome and $0$ otherwise. For independent trials with success probability $p$, the indicators are i.i.d. with expectation $p$ and variance $p(1-p)$, like every Bernoulli variable (Chapter 5). Their mean is the relative frequency of successes and converges in probability to $p$. If $p=0.4$ and $n=400$, the probability of a deviation of at least $0.1$ is at most $\dfrac{0.4\cdot0.6}{400\cdot0.1^2}=\dfrac{0.24}{4}=0.06$. The bound uses only the parameters of the Bernoulli model. The result justifies reading the probability of an outcome as its relative frequency over a large number of repeated trials.

::grafico{curve="t,24/t,24,990" xmin=0 xmax=1000 ymin=-0.06 ymax=1.12 nomi="n,L" legenda="L=\dfrac{24}{n}" punti="400,0.06" segmenti="400,0,400,0.06" etichette="400,0.17,n = 400" titolo="Chebyshev's bound $\dfrac{0.4\cdot0.6}{n\cdot0.1^2}=\dfrac{24}{n}$ for a deviation of at least $0.1$. At $n=400$ it equals $0.06$."}
:::

:::attenzione
In the weak law, the tolerance is fixed before $n$ tends to infinity. If the tolerance decreases together with $n$, the probability does not tend to zero. For example, if the observations have distribution $N(0,1)$, then $\bar X_n$ has distribution $N\!\left(0,\dfrac1n\right)$ and standard deviation $\dfrac{1}{\sqrt n}$. Taking $\varepsilon_n=\dfrac{1}{\sqrt n}$ itself as the tolerance gives $P(|\bar X_n|>\varepsilon_n)=P(|Z|>1)$ with $Z=\sqrt n\,\bar X_n\sim N(0,1)$. The probability equals $2\bigl(1-\Phi(1)\bigr)\approx0.3173$ for every $n$.
:::

## Central limit theorem

:::teorema{#tcl titolo="A normal limit for the standardized sample mean"}
The result of a fair die has a uniform distribution on the values from $1$ to $6$, far from the bell shape of the normal distribution. The mean of two dice already equals $3.5$ with probability $\dfrac{6}{36}$ and equals $1$ with probability $\dfrac1{36}$, so the central values are the most likely. As the number of dice increases, the distribution of the mean, centered and divided by the standard error, approaches the standard normal distribution. The following theorem states that the same happens for every distribution with finite and positive variance.

Let $X_1,X_2,\ldots$ be i.i.d. with mean $\mu$ and variance $0<\sigma^2<\infty$. Define the standardized mean $Z_n=\dfrac{\bar X_n-\mu}{\dfrac{\sigma}{\sqrt n}}$. Then for every $z\in\mathbb R$,
$$
\lim_{n\to\infty}P(Z_n\le z)=\Phi(z).
$$
This convergence concerns the cumulative distribution functions of the variables $Z_n$. When the cumulative distribution functions of a sequence of variables converge in this way to that of a variable $Z$, the sequence is said to **converge in distribution** to $Z$; the theorem therefore states that $Z_n$ converges in distribution to a standard normal variable.

For large $n$, then, $P(Z_n\le z)\approx\Phi(z)$, whatever the distribution of the individual observations, provided they have finite and positive variance. Returning to the mean, $\bar X_n$ has approximately the distribution $N\!\left(\mu,\dfrac{\sigma^2}{n}\right)$. The two limit theorems say different things. The weak law says that $\bar X_n$ concentrates around $\mu$. The central limit theorem says how the deviations $\bar X_n-\mu$, measured in standard errors, are distributed: for example, the mean differs from $\mu$ by more than two standard errors with probability close to $2\bigl(1-\Phi(2)\bigr)\approx0.0455$, for every large $n$. The confidence intervals and tests for non-normal populations of Chapters 10 and 11 are based on this.
:::

:::osservazione{titolo="Calculations with the normal approximation"}
When $n$ is large, the distribution of $\bar X_n$ is approximated by $N\!\left(\mu,\dfrac{\sigma^2}{n}\right)$. The theorem does not say from which $n$ the approximation is good: the warning after the next example shows a case in which $n=30$ is not enough, and for binomial counts the section on proportions gives a rule of thumb.

For the sum $T_n=\sum_{i=1}^nX_i=n\bar X_n$ the center becomes $n\mu$ and the standard deviation becomes $\sigma\sqrt n$. The probabilities for the mean and the sum agree when their thresholds are converted using the same factor $n$. With $n=64$, $\mu=5$, and $\sigma=2$, for example, the event $T_{64}>352$ coincides with $\bar X_{64}>\dfrac{352}{64}=5.5$, and the two standardized thresholds are equal: $\dfrac{352-320}{16}=2$ and $\dfrac{5.5-5}{0.25}=2$. For an interval, standardize both endpoints and subtract the cumulative distribution function at the lower endpoint from its value at the upper endpoint.
:::

:::esempio{titolo="A threshold for total consumption"}
The daily energy consumption of each of $64$ independent devices has the same distribution, with mean $5\,\mathrm{kWh}$ and standard deviation $2\,\mathrm{kWh}$. The total consumption $T_{64}$ has mean $64\cdot5=320\,\mathrm{kWh}$ and standard deviation $2\sqrt{64}=16\,\mathrm{kWh}$. The threshold of $352\,\mathrm{kWh}$ lies two standard errors above the mean because $\dfrac{352-320}{16}=2$. The central limit theorem gives $P(T_{64}>352)\approx1-\Phi(2)\approx0.0228$.

::grafico{f="exp(-x^2/2)/sqrt(2*PI)" area="exp(-x^2/2)/sqrt(2*PI);0;2;3.9" segmenti="2,0,2,0.05399" xmin=-3.9 xmax=4 ymin=-0.035 ymax=0.46 nomi="z,f" legenda="N(0,1)" etichette="2.1,0.11,352 kWh;0.1,0.42,320 kWh" titolo="The threshold $352\,\mathrm{kWh}$ corresponds to $z=2$. The shaded area approximates $P(T_{64}>352)\approx0.0228$."}
:::

:::attenzione
The theorem is asymptotic, that is, it describes what happens as $n$ tends to infinity, and it does not say from which sample size the approximation is good. For example, in $30$ Bernoulli trials with $p=0.01$, the number of successes is zero with probability $0.99^{30}\approx0.7397$. The distribution places substantial mass at a single point. The normal distribution with the same mean $0.3$ and the same standard deviation $\sqrt{0.297}\approx0.545$ assigns to values below $0.5$, that is, closer to $0$ than to $1$, the probability $\Phi\!\left(\dfrac{0.5-0.3}{0.545}\right)\approx0.643$, far from the exact value $0.7397$. For tail probabilities at a fixed sample size, when the binomial distribution is available the exact value is calculated.
:::

:::esempio{titolo="Comparison with an exact skewed distribution"}
Consider $36$ independent, exponentially distributed times with mean and standard deviation both equal to one minute, that is, with rate $1$ per minute (Chapter 6). The total $T_{36}$ has mean $36\,\mathrm{min}$ and standard deviation $\sqrt{36}=6\,\mathrm{min}$. The threshold $45$ is $9$ minutes from the mean, that is, $\dfrac96=1.5$ standard deviations, so the central limit theorem gives $P(T_{36}>45)\approx1-\Phi(1.5)\approx0.0668$.

In this case the exact distribution of the total is also known. The sum of $n$ independent exponential variables with rate $\lambda$ ($\lambda$ is read lambda) has a gamma distribution with shape $n$ and rate $\lambda$, the family defined in Chapter 6. For $n=2$ this can be checked with the convolution formula of Chapter 7: if $Y_1$ and $Y_2$ are independent exponential variables with rate $\lambda$, the density of the sum $Y_1+Y_2$ at a point $s>0$ is
$$
f_{Y_1+Y_2}(s)=\int_0^s\lambda e^{-\lambda x}\,\lambda e^{-\lambda(s-x)}\,dx=\lambda^2se^{-\lambda s},
$$
which is the gamma density with shape $2$; one then adds one term at a time. Here the sum therefore has an exact gamma distribution with shape $36$ and rate $1$ per minute. The gamma tail probability is about $0.0742$. The approximate and exact probabilities differ by about $0.0074$, because a finite sum of exponential variables remains skewed, with a right tail longer than the left one. When the gamma model is known, the exact value measures the approximation error: here the normal distribution underestimates the tail by about $10\,\%$.

::grafico{f="exp(35*log(x+1e-12)-x-92.1361756);exp(-((x-36)/6)^2/2)/(6*sqrt(2*PI))" area="exp(35*log(x)-x-92.1361756);0;45;60" segmenti="45,0,45,0.02018" xmin=0 xmax=60 ymin=-0.005 ymax=0.078 nomi="t,f" legenda="\text{gamma with shape }36;N(36,36)" titolo="Exact density of the total and its normal approximation. The shading shows the visible part of the upper tail, whose exact probability is $P(T_{36}>45)\approx0.0742$."}
:::

## Proportions and the continuity correction

:::teorema{#proporzioni titolo="Distribution of the sample proportion"}
Inspect $400$ parts, each defective with probability $0.2$ independently of the others. If $K$ is the number of defective parts found, the fraction of defective parts in the sample is $\dfrac{K}{400}$: with $K=86$ it equals $0.215$. The following theorem states that this fraction has mean $0.2$ and standard error $\sqrt{\dfrac{0.2\cdot0.8}{400}}=0.02$.

Let $X_1,\ldots,X_n$ be i.i.d. success indicators with success probability $p$, that is, Bernoulli variables (Chapter 5). The count $K=\sum_{i=1}^nX_i$ has the binomial distribution $\operatorname{Bin}(n,p)$, and the **sample proportion** $\hat p=\dfrac{K}{n}$ ($\hat p$ is read p hat) satisfies
$$
E[\hat p]=p,\qquad
\operatorname{Var}(\hat p)=\frac{p(1-p)}{n}.
$$
These formulas follow from those for the sample mean because $\hat p$ is the mean of the indicators and an indicator has mean $p$ and variance $p(1-p)$. If $0<p<1$, the variance $p(1-p)$ is positive and the central limit theorem applies. A rule of thumb for the normal approximation to the binomial requires both $np$ and $n(1-p)$ to be at least $10$: in the example $np=80$ and $n(1-p)=320$. The sample proportion is the statistic with which Chapter 9 estimates a population proportion, such as the fraction of defective parts in the whole production.
:::

:::definizione{#correzione-continuita titolo="Continuity correction"}
Let $K\sim\operatorname{Bin}(100,0.5)$, with mean $50$ and variance $100\cdot0.5\cdot0.5=25$. The probability $P(K=50)$ is positive, whereas a normal distribution assigns probability zero to every single point. In the histogram of the binomial distribution each bar has width $1$, is centered on count $k$, and has height $P(K=k)$, so its area equals the mass at $k$. The mass at $50$ is therefore represented by the area of the bar between $49.5$ and $50.5$, and the normal density is integrated over that interval. In the same way, the three bars for counts $49$, $50$, and $51$ cover the interval from $48.5$ to $51.5$, over which the normal density with mean $50$ and variance $25$ is integrated.

The count $K$ of a binomial distribution takes integer values. When its distribution is approximated by a normal variable $Y$ with mean $np$ and variance $np(1-p)$, the mass at $k$ is approximated by the area over the interval $(k-0.5,k+0.5)$. This choice is called the **continuity correction**.

- For the event $a\le K\le b$, with integer endpoints $a,b$, the thresholds become $a-0.5$ and $b+0.5$.
- For $K\ge k$ the upper tail starting at $k-0.5$ is used.
- For $K\le k$ the lower tail ending at $k+0.5$ is used.

An event with a strict inequality is first written as a set of integers. For example, $K>72$ is equivalent to $K\ge73$, so the corrected tail starts at $72.5$; similarly, $K<65$ is equivalent to $K\le64$ and the lower tail ending at $64.5$ is used.

::grafico{f="exp(-((x-50)/5)^2/2)/(5*sqrt(2*PI))" area="exp(-((x-50)/5)^2/2)/(5*sqrt(2*PI));0;48.5;51.5" linee="41.5,0 41.5,0.02229 42.5,0.02229 42.5,0;42.5,0 42.5,0.03007 43.5,0.03007 43.5,0;43.5,0 43.5,0.03895 44.5,0.03895 44.5,0;44.5,0 44.5,0.04847 45.5,0.04847 45.5,0;45.5,0 45.5,0.05796 46.5,0.05796 46.5,0;46.5,0 46.5,0.06659 47.5,0.06659 47.5,0;47.5,0 47.5,0.07353 48.5,0.07353 48.5,0;48.5,0 48.5,0.07803 49.5,0.07803 49.5,0;49.5,0 49.5,0.07959 50.5,0.07959 50.5,0;50.5,0 50.5,0.07803 51.5,0.07803 51.5,0;51.5,0 51.5,0.07353 52.5,0.07353 52.5,0;52.5,0 52.5,0.06659 53.5,0.06659 53.5,0;53.5,0 53.5,0.05796 54.5,0.05796 54.5,0;54.5,0 54.5,0.04847 55.5,0.04847 55.5,0;55.5,0 55.5,0.03895 56.5,0.03895 56.5,0;56.5,0 56.5,0.03007 57.5,0.03007 57.5,0;57.5,0 57.5,0.02229 58.5,0.02229 58.5,0" xmin=37.2 xmax=61 ymin=-0.006 ymax=0.095 nomi="k,p" legenda="N(50,25)" titolo="Histogram of $\operatorname{Bin}(100,0.5)$ and normal density. The shaded area from $48.5$ to $51.5$ approximates the total mass at counts $49$, $50$, and $51$."}
:::

:::esempio{titolo="A normal area for three integer counts"}
Let $K\sim\operatorname{Bin}(100,0.5)$. The event $49\le K\le51$ contains three integers, so the density of the approximating normal variable $Y\sim N(50,25)$ is integrated from $48.5$ to $51.5$. The standardized thresholds are $\dfrac{48.5-50}{5}=-0.3$ and $\dfrac{51.5-50}{5}=0.3$. This gives
$$
P(49\le K\le51)
\approx \Phi(0.3)-\Phi(-0.3)
\approx 0.2358.
$$
The exact sum of the three binomial masses is approximately $0.2356$. The graph shows the area between $-0.3$ and $0.3$ on the standardized scale, corresponding to the thresholds $48.5$ and $51.5$ on the count scale.

::grafico{f="exp(-x^2/2)/sqrt(2*PI)" area="exp(-x^2/2)/sqrt(2*PI);0;-0.3;0.3" segmenti="-0.3,0,-0.3,0.38139;0.3,0,0.3,0.38139" xmin=-3.5 xmax=3.5 ymin=-0.04 ymax=0.46 nomi="z,f" legenda="N(0,1)" titolo="Area between −0.3 and 0.3 approximating the combined probability of counts 49, 50, and 51"}

:::

:::esempio{titolo="From a percentage to a tail probability for a count"}
In $n=120$ independent trials with success probability $p=0.55$, we want to approximate the probability that the proportion of successes exceeds $60\,\%$. The rule of thumb is satisfied, because $np=66$ and $n(1-p)=54$ are at least $10$. The event $\hat p>0.60$ is equivalent to $K>0.60\cdot120$, that is, to $K>72$. Since $K$ is an integer, the first possible count in the event is $73$, so the approximating normal density is integrated from $72.5$ to the right. On the proportion scale, this threshold adjustment is half of one step of size $\dfrac1{120}$.

The normal distribution has mean $66$ and standard deviation $\sqrt{120\cdot0.55\cdot0.45}=\sqrt{29.7}\approx5.45$. This gives
$$
P(K>72)\approx1-\Phi\!\left(\frac{72.5-66}{5.45}\right)\approx1-\Phi(1.19)\approx0.117.
$$
:::

## Random samples from finite populations

::::teorema{#popolazione-finita titolo="Finite population correction"}
A population contains the values $2$, $4$, and $6$, with mean $4$ and variance $\dfrac{4+0+4}{3}=\dfrac83$. Drawing two units with replacement, that is, putting the drawn unit back before the next draw, the sample mean has variance $\dfrac{8}{3\cdot2}=\dfrac43$ by the theorem on the sample mean. Drawing two distinct units, the example "Exact distribution for a population of three units", later on, finds instead the variance $\dfrac23$, that is, half as much. The following theorem calculates this reduction in general.

Let $y_1,\ldots,y_N$ be the values of a finite population with $N\ge2$. Its mean is $\mu_N=\dfrac1N\sum_{i=1}^Ny_i$ and its population variance is $\sigma_N^2=\dfrac1N\sum_{i=1}^N(y_i-\mu_N)^2$. In a simple random sample without replacement, defined in Chapter 1, all subsets of $n$ units, with $1\le n\le N$, are equally likely. For the sample mean,
$$
E[\bar X_n]=\mu_N,
\qquad
\operatorname{Var}(\bar X_n)=\frac{\sigma_N^2}{n}\frac{N-n}{N-1}.
$$
The square root of $\dfrac{N-n}{N-1}$ is the correction factor applied to the standard error obtained under independent draws from the same population. The factor matters when the sample is a sizeable part of the population. If $n=200$ students are drawn from $N=12000$, as in Chapter 1, the factor $\dfrac{11800}{11999}\approx0.983$ changes the variance by less than $2\,\%$.

:::dimostrazione
Consider the draws in order and calculate the covariance between two distinct positions. Each position samples the population values uniformly, so it has expectation $\mu_N$ and variance $\sigma_N^2$. Writing $d_i=y_i-\mu_N$ gives $\sum_i d_i=0$. The sum of the products $d_id_j$ over ordered pairs with $i\ne j$ is the square of the sum minus the squares of the individual terms:
$$
\sum_{i\ne j}d_id_j=\Bigl(\sum_i d_i\Bigr)^2-\sum_i d_i^2=-\sum_i d_i^2=-N\sigma_N^2.
$$
The $N(N-1)$ ordered pairs of distinct units are equally likely, so the covariance is the mean of the products $d_id_j$ and equals $-\dfrac{N\sigma_N^2}{N(N-1)}=-\dfrac{\sigma_N^2}{N-1}$.

The variance of the sample sum contains $n$ variances and $n(n-1)$ covariance terms for distinct positions. Dividing by $n^2$ to pass from the sum to the mean gives
$$
\begin{aligned}
\operatorname{Var}(\bar X_n)
&=\frac{1}{n^2}
\left(n\sigma_N^2-\frac{n(n-1)\sigma_N^2}{N-1}\right)\\[6pt]
&=\frac{\sigma_N^2}{n}\frac{N-n}{N-1}.
\end{aligned}
$$
:::
::::

:::esempio{titolo="Precision with and without replacement"}
Draw $20$ units from a population of $81$ units with $\sigma_N^2=80$. Without replacement, the variance of the mean is $\dfrac{80}{20}\cdot\dfrac{81-20}{81-1}=4\cdot\dfrac{61}{80}=3.05$. Under independent sampling with replacement it is $\dfrac{80}{20}=4$. If all $81$ units are sampled without replacement, the factor equals $\dfrac{81-81}{80}=0$ and the standard error is zero, because the sample includes the entire population.
:::

:::osservazione{titolo="Two conventions for population variance"}
If the variance is defined as $S_N^2=\dfrac1{N-1}\sum_{i=1}^N(y_i-\mu_N)^2$, then $S_N^2=\dfrac{N}{N-1}\sigma_N^2$, because the sum of squared deviations is the same and only the divisor changes. Substituting $\sigma_N^2=\dfrac{N-1}{N}S_N^2$, the variance of the mean becomes
$$
\frac{N-1}{N}\cdot\frac{S_N^2}{n}\cdot\frac{N-n}{N-1}=\frac{S_N^2}{n}\left(1-\frac nN\right).
$$
For a population of indicators with a proportion $p$ of values equal to $1$, the mean is $p$ and the variance with divisor $N$ is $p(1-p)$, as for a Bernoulli variable. The finite population formula therefore also applies to the sample proportion under sampling without replacement.
:::

:::esempio{titolo="Exact distribution for a population of three units"}
A population contains the values $2$, $4$, and $6$. Two units are drawn without replacement. The three unordered samples $\{2,4\}$, $\{2,6\}$, and $\{4,6\}$ are equally likely, with sample means $3$, $4$, and $5$. The mean of these three possibilities is $4$ and their variance is $\dfrac{1+0+1}{3}=\dfrac23$. The original population variance is $\dfrac{4+0+4}{3}=\dfrac83$. The formula with the finite population correction gives
$$
\frac{\sigma_N^2}{n}\frac{N-n}{N-1}
=\frac{8}{3\cdot2}\cdot\frac12
=\frac23,
$$
in agreement with the direct count. For $n=1$, the correction factor equals $\dfrac{N-1}{N-1}=1$ because a single draw has the same distribution with or without replacement.
:::

:::esempio{titolo="Proportions in a finite batch"}
A batch contains $20$ items, four of them defective. Three items are selected by simple random sampling without replacement. If $K$ counts defective items, the probability of finding at least one is one minus the ratio of the number of triples containing only good items to the total number of possible triples. With the binomial coefficients of Chapter 3, this gives
$$
P(K\ge1)=1-\frac{\binom{16}{3}}{\binom{20}{3}}=1-\frac{560}{1140}\approx0.5088.
$$
The exact count follows a hypergeometric distribution (Chapter 5). To find the variance of the proportion $\hat p=\dfrac K3$, instead start with the population variance of the indicators, $0.2\cdot0.8=0.16$, which gives $\operatorname{Var}(\hat p)=\dfrac{0.16}{3}\cdot\dfrac{17}{19}\approx0.0477$. With replacement the variance would be $\dfrac{0.16}{3}\approx0.0533$.
:::

## Choosing the model and the result

:::esempio{titolo="The same threshold with different information"}
Consider $25$ independent measurements with mean $50$ and standard deviation $10$. The sample mean has center $50$ and standard error $\dfrac{10}{5}=2$. We want the probability that the sample mean differs from its center by at least $4$.

- Given only the moments, Chebyshev's inequality gives the upper bound $\dfrac{2^2}{4^2}=0.25$. The bound holds for every distribution with mean $50$ and standard deviation $10$.
- If the individual measurements are known to be normal, the sample mean has distribution $N(50,4)$ and the same probability is exactly $2\bigl(1-\Phi(2)\bigr)\approx0.0455$.

If the distribution of the individual measurements is unknown, the value $0.0455$ is an approximation given by the central limit theorem. With $n=25$ its quality depends on the distribution of the individual measurements, as the warning about Bernoulli trials and the comparison with the gamma distribution show.
:::

:::osservazione{titolo="Fixed and standardized thresholds"}
For a fixed tolerance, doubling $n$ halves Chebyshev's bound on the probability of a deviation of the mean. With $\sigma=10$ and tolerance $4$, the bound is $\dfrac{100}{25\cdot16}=0.25$ for $n=25$ and $\dfrac{100}{50\cdot16}=0.125$ for $n=50$. The corresponding threshold on the standardized scale increases because the standard error falls: the tolerance $4$ equals $2$ standard errors for $n=25$ and about $2.83$ standard errors for $n=50$, where the standard error is $\dfrac{10}{\sqrt{50}}\approx1.41$.

If the number of standard errors is held fixed instead, for example at $2$, the tolerance in the original units becomes $\dfrac{2\sigma}{\sqrt n}$, that is, $4$ for $n=25$ and $2$ for $n=100$. By the central limit theorem, the probability of exceeding this tolerance then approaches $2\bigl(1-\Phi(2)\bigr)\approx0.0455$, not zero. Whether the tolerance is expressed in the original units or in standard errors therefore determines which probability is being calculated.
:::

:::esempio{titolo="Sums, means, and numbers of successes"}
For $80$ components, a probability is calculated that concerns either their total weight or the number of components exceeding a weight limit. The two questions require different models.

- If the observed quantity is weight and the measurements are i.i.d. with standard deviation $\sigma$, the sum has standard error $\sigma\sqrt{80}$.
- If an indicator is recorded for each component, equal to $1$ when the component exceeds the limit, the count has a binomial distribution provided the indicators are independent with a common probability.
- If the batch is finite and the units are selected without replacement, the finite population model applies instead.

The applicable formula is therefore identified from two pieces of information: which quantity is measured on each unit and how the units were selected.
:::
